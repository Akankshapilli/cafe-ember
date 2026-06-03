"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type LuxuryButtonProps = {
  children: ReactNode;

  href?: string;

  onClick?: () => void;

  variant?: "gold" | "outline" | "dark";

  className?: string;

  icon?: ReactNode;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;

  fullWidth?: boolean;
};

export default function LuxuryButton({
  children,

  href,

  onClick,

  variant = "gold",

  className,

  icon,

  type = "button",

  disabled = false,

  fullWidth = false,
}: LuxuryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em] transition-all duration-300";

  const variants = {
    gold: "bg-[#C9A96E] text-[#0E221A] hover:scale-[1.03] hover:bg-[#D8BB86]",

    outline:
      "border border-[#FFFFFF]/15 bg-[#FFFFFF]/5 text-[#F5EFE6] backdrop-blur-xl hover:border-[#C9A96E]/40 hover:bg-[#FFFFFF]/10",

    dark: "bg-[#173126] text-[#F5EFE6] hover:bg-[#214236] hover:scale-[1.03]",
  };

  const styles = clsx(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}

        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}

      {icon}
    </button>
  );
}
