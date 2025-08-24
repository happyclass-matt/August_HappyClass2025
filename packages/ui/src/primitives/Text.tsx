import * as React from "react";
import clsx from "clsx";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tone?: "primary" | "secondary" | "muted";
  size?: "sm" | "md" | "lg";
}

export const Text: React.FC<TextProps> = ({ tone = "primary", size = "md", className, ...props }) => {
  const toneClass =
    tone === "secondary" ? "text-text-secondary" : tone === "muted" ? "text-text-muted" : "text-text-primary";
  const sizeClass = size === "sm" ? "text-sm" : size === "lg" ? "text-base" : "text-[15px]";
  return <p className={clsx("leading-relaxed", toneClass, sizeClass, className)} {...props} />;
};

