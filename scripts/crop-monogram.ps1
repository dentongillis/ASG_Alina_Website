# Crop the ASG monogram out of a transparent stacked-logo PNG.
# Keeps the top portion (the metallic "ASG" letterforms) and discards the
# wordmark and tagline so the small mark reads well in tight UI like a header.

param(
  [Parameter(Mandatory = $true)] [string] $Source,
  [Parameter(Mandatory = $true)] [string] $Destination,
  [double] $TopFraction = 0.0,
  [double] $BottomFraction = 0.52,
  [double] $LeftFraction = 0.20,
  [double] $RightFraction = 0.80
)

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Image]::FromFile($Source)
$w = $src.Width
$h = $src.Height

$x = [int]($LeftFraction * $w)
$y = [int]($TopFraction * $h)
$cw = [int](($RightFraction - $LeftFraction) * $w)
$ch = [int](($BottomFraction - $TopFraction) * $h)

$out = New-Object System.Drawing.Bitmap $cw, $ch, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$destRect = New-Object System.Drawing.Rectangle 0, 0, $cw, $ch
$g.DrawImage($src, $destRect, $x, $y, $cw, $ch, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$src.Dispose()

$dstDir = Split-Path -Parent $Destination
if ($dstDir -and -not (Test-Path $dstDir)) {
  New-Item -ItemType Directory -Force -Path $dstDir | Out-Null
}

$out.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()

Write-Host "Wrote monogram: $Destination ($cw x $ch)"
