"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionTagProps = {
  children: ReactNode;

  light?: boolean;

  className?: string;

  textClassName?: string;

  icon?: ReactNode;
};

export default function SectionTag({
  children,

  light = true,

  className,

  textClassName,

  icon,
}: SectionTagProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-xl",
        light
          ? "border-[#FFFFFF]/15 bg-[#FFFFFF]/10"
          : "border-[#173126]/10 bg-[#173126]/5",
        className,
      )}
    >
      {icon}

      <p
        className={clsx(
          "text-[10px] uppercase tracking-[0.28em]",
          light ? "text-[#F5EFE6]" : "text-[#173126]",
          textClassName,
        )}
      >
        {children}
      </p>
    </div>
  );
}
