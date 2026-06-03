"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionContainerProps = {
  children: ReactNode;

  className?: string;

  background?: "light" | "dark" | "transparent";

  padding?: string;

  overflow?: boolean;
};

export default function SectionContainer({
  children,

  className,

  background = "transparent",

  padding = "py-32",

  overflow = true,
}: SectionContainerProps) {
  const backgrounds = {
    light: "bg-[#FFFDF9] text-[#173126]",

    dark: "bg-[#0E221A] text-[#F5EFE6]",

    transparent: "",
  };

  return (
    <section
      className={clsx(
        "relative",
        overflow && "overflow-hidden",
        padding,
        backgrounds[background],
        className,
      )}
    >
      {children}
    </section>
  );
}
