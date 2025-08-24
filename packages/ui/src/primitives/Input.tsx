import * as React from "react";
import clsx from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "h-10 w-full rounded-md border border-line bg-panel px-3 text-text-primary shadow-sm outline-none transition-shadow placeholder:text-text-muted",
        "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});

