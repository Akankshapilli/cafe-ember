"use client";

import Image from "next/image";
import clsx from "clsx";

type ImageCardProps = {
  image: string;
  title: string;

  description?: string;

  tag?: string;

  icon?: string;

  dark?: boolean;

  height?: string;

  className?: string;

  contentClassName?: string;

  overlayClassName?: string;

  imageClassName?: string;

  hoverEffect?: boolean;
};

export default function ImageCard({
  image,
  title,

  description,

  tag,

  icon,

  dark = false,

  height = "h-[540px]",

  className,

  contentClassName,

  overlayClassName,

  imageClassName,

  hoverEffect = true,
}: ImageCardProps) {
  return (
    <div
      className={clsx(
        "group overflow-hidden rounded-[36px] border transition-all duration-500",
        hoverEffect && "hover:-translate-y-2",
        dark
          ? "border-[#FFFFFF]/10 bg-[#FFFFFF]/5 backdrop-blur-xl hover:bg-[#FFFFFF]/8"
          : "border-[#173126]/8 bg-[#FFFDF9]/90 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={900}
          height={1200}
          className={clsx(
            height,
            "w-full object-cover transition-transform duration-700",
            hoverEffect && "group-hover:scale-105",
            imageClassName,
          )}
        />

        {/* overlay */}
        <div
          className={clsx(
            "absolute inset-0 bg-gradient-to-t",
            dark
              ? "from-[#0E221A]/90 via-transparent to-transparent"
              : "from-[#0E221A]/80 via-transparent to-transparent",
            overlayClassName,
          )}
        />

        {/* tag */}
        {tag && (
          <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
              {tag}
            </p>
          </div>
        )}
      </div>

      {/* content */}
      <div className={clsx("p-7", contentClassName)}>
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3
              className={clsx(
                "text-3xl font-light",
                dark ? "text-[#F5EFE6]" : "text-[#173126]",
              )}
            >
              {title}
            </h3>

            {description && (
              <p
                className={clsx(
                  "mt-4 text-sm leading-relaxed",
                  dark ? "text-[#F5EFE6]/65" : "text-[#173126]/70",
                )}
              >
                {description}
              </p>
            )}
          </div>

          {icon && (
            <Image
              src={icon}
              alt={title}
              width={24}
              height={24}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
