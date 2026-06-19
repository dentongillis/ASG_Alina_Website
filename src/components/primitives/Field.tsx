import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const fieldClasses =
  "w-full rounded-[2px] border border-asg-hairline bg-asg-white px-4 py-3 text-asg-ink " +
  "placeholder:text-asg-muted/70 transition-colors duration-200 " +
  "focus:outline-none focus:border-asg-gold focus:ring-2 focus:ring-asg-gold/30";

interface LabelWrapperProps {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: ReactNode;
  hint?: string;
}

export function LabelWrapper({
  label,
  required,
  htmlFor,
  children,
  hint,
}: LabelWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-asg-ink/90"
      >
        {label}
        {required && <span className="ml-1 text-asg-gold-deep">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-asg-muted">{hint}</p>}
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, required, className, ...rest }: InputProps) {
  const inputId = id ?? rest.name ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <LabelWrapper htmlFor={inputId} label={label} required={required}>
      <input
        id={inputId}
        required={required}
        className={cn(fieldClasses, className)}
        {...rest}
      />
    </LabelWrapper>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({
  label,
  id,
  required,
  className,
  rows = 5,
  ...rest
}: TextareaProps) {
  const inputId = id ?? rest.name ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <LabelWrapper htmlFor={inputId} label={label} required={required}>
      <textarea
        id={inputId}
        rows={rows}
        required={required}
        className={cn(fieldClasses, "resize-y min-h-[140px]", className)}
        {...rest}
      />
    </LabelWrapper>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly string[];
}

export function Select({
  label,
  id,
  required,
  className,
  options,
  ...rest
}: SelectProps) {
  const inputId = id ?? rest.name ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <LabelWrapper htmlFor={inputId} label={label} required={required}>
      <select
        id={inputId}
        required={required}
        className={cn(fieldClasses, "appearance-none pr-10", className)}
        {...rest}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </LabelWrapper>
  );
}
