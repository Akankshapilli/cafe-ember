"use client";

import clsx from "clsx";

type GlassCardProps = {
  children: React.ReactNode;

  className?: string;

  rounded?: string;

  border?: string;

  background?: string;

  blur?: string;

  padding?: string;

  hoverEffect?: boolean;
};

export default function GlassCard({
  children,

  className,

  rounded = "rounded-[32px]",

  border = "border border-[#FFFFFF]/10",

  background = "bg-[#FFFFFF]/5",

  blur = "backdrop-blur-2xl",

  padding = "p-6",

  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        rounded,
        border,
        background,
        blur,
        padding,
        hoverEffect &&
          "transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFFFFF]/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
