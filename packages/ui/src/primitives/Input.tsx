import * as React from "react";
import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, size = "md", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-md border border-line bg-panel px-3 text-text-primary shadow-sm outline-none transition-shadow placeholder:text-text-muted",
        size === "sm" ? "h-9 text-sm" : size === "lg" ? "h-12 text-base" : "h-10 text-sm",
        "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});

