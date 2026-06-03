"use client";

import clsx from "clsx";

type SectionHeadingProps = {
  tag?: string;

  title: string;

  highlight?: string;

  description?: string;

  align?: "left" | "center";

  light?: boolean;

  className?: string;

  titleClassName?: string;

  descriptionClassName?: string;

  tagClassName?: string;
};

export default function SectionHeading({
  tag,

  title,

  highlight,

  description,

  align = "center",

  light = false,

  className,

  titleClassName,

  descriptionClassName,

  tagClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left",
        className,
      )}
    >
      {/* tag */}
      {tag && (
        <p
          className={clsx(
            "mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]",
            tagClassName,
          )}
        >
          {tag}
        </p>
      )}

      {/* title */}
      <h2
        className={clsx(
          "text-4xl font-light leading-tight md:text-6xl",
          light ? "text-[#F5EFE6]" : "text-[#173126]",
          titleClassName,
        )}
      >
        {title}

        {highlight && <span className="block text-[#C9A96E]">{highlight}</span>}
      </h2>

      {/* description */}
      {description && (
        <p
          className={clsx(
            "mt-6 max-w-2xl text-sm leading-relaxed md:text-base",
            align === "center" && "mx-auto",
            light ? "text-[#F5EFE6]/70" : "text-[#173126]/70",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
