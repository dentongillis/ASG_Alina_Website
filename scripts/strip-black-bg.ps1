# Strip a solid-black background from a logo JPEG/PNG and emit a true transparent PNG.
# Uses "max-channel-as-alpha" with color un-premultiplication, so gold/silver gradients
# composite cleanly on any background (white, cream, dark).
#
# Usage:
#   pwsh -File scripts/strip-black-bg.ps1 -Source <in> -Destination <out> [-Threshold 8]

param(
  [Parameter(Mandatory = $true)] [string] $Source,
  [Parameter(Mandatory = $true)] [string] $Destination,
  [int] $Threshold = 8
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $Source)) {
  Write-Error "Source file not found: $Source"
  exit 1
}

$srcImg = [System.Drawing.Image]::FromFile($Source)
$w = $srcImg.Width
$h = $srcImg.Height

# Render the (possibly 24bpp) source into a 32bpp ARGB working canvas.
$src = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($src)
$g.DrawImage($srcImg, 0, 0, $w, $h)
$g.Dispose()
$srcImg.Dispose()

$rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$data = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride
$len = $stride * $h
$buf = New-Object byte[] $len
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $buf, 0, $len)

# 32bpp ARGB in memory is laid out as B, G, R, A (little-endian).
for ($y = 0; $y -lt $h; $y++) {
  $row = $y * $stride
  for ($x = 0; $x -lt $w; $x++) {
    $i = $row + $x * 4
    $b = $buf[$i]
    $gv = $buf[$i + 1]
    $r = $buf[$i + 2]

    $m = [Math]::Max([Math]::Max($r, $gv), $b)
    if ($m -le $Threshold) {
      # Solid black -> fully transparent.
      $buf[$i] = 0
      $buf[$i + 1] = 0
      $buf[$i + 2] = 0
      $buf[$i + 3] = 0
    } else {
      # Un-premultiply: displayed = color * (alpha/255), so color = displayed * 255 / alpha.
      # Since alpha = max-channel, the brightest channel becomes 255 and the gradient is preserved.
      $alpha = $m
      $nr = [int]([Math]::Round(($r * 255.0) / $alpha))
      $ng = [int]([Math]::Round(($gv * 255.0) / $alpha))
      $nb = [int]([Math]::Round(($b * 255.0) / $alpha))
      if ($nr -gt 255) { $nr = 255 }
      if ($ng -gt 255) { $ng = 255 }
      if ($nb -gt 255) { $nb = 255 }
      $buf[$i]     = [byte]$nb
      $buf[$i + 1] = [byte]$ng
      $buf[$i + 2] = [byte]$nr
      $buf[$i + 3] = [byte]$alpha
    }
  }
}

[System.Runtime.InteropServices.Marshal]::Copy($buf, 0, $data.Scan0, $len)
$src.UnlockBits($data)

$dstDir = Split-Path -Parent $Destination
if ($dstDir -and -not (Test-Path $dstDir)) {
  New-Item -ItemType Directory -Force -Path $dstDir | Out-Null
}

$src.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()

Write-Host "Wrote transparent PNG: $Destination ($w x $h)"
