"use client";

import clsx from "clsx";

type AmbientLightProps = {
  className?: string;
  size?: string;
  color?: string;
  opacity?: string;
  blur?: string;
};

export default function AmbientLight({
  className,
  size = "h-[500px] w-[500px]",
  color = "bg-[#C9A96E]",
  opacity = "opacity-10",
  blur = "blur-3xl",
}: AmbientLightProps) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute rounded-full",
        size,
        color,
        opacity,
        blur,
        className,
      )}
    />
  );
}
