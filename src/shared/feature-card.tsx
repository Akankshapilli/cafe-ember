"use client";

import Image from "next/image";
import clsx from "clsx";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;

  className?: string;

  variant?: "light" | "dark";

  iconBg?: string;

  titleClassName?: string;
  descriptionClassName?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,

  className,

  variant = "dark",

  iconBg,

  titleClassName,
  descriptionClassName,
}: FeatureCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={clsx(
        "rounded-[28px] border p-6 backdrop-blur-xl",
        isDark
          ? "border-[#FFFFFF]/10 bg-[#FFFFFF]/5"
          : "border-[#173126]/8 bg-white/70",
        className,
      )}
    >
      <div className="flex items-start gap-5">
        {/* icon */}
        <div
          className={clsx(
            "flex h-14 w-14 items-center justify-center rounded-full",
            iconBg ? iconBg : isDark ? "bg-[#FFFFFF]/5" : "bg-[#173126]",
          )}
        >
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {/* content */}
        <div>
          <h3
            className={clsx(
              "text-xl font-light",
              isDark ? "text-[#F5EFE6]" : "text-[#173126]",
              titleClassName,
            )}
          >
            {title}
          </h3>

          <p
            className={clsx(
              "mt-2 text-sm leading-relaxed",
              isDark ? "text-[#F5EFE6]/65" : "text-[#173126]/70",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
