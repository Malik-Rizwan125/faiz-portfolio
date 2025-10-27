import clsx from "clsx";
import Image from "next/image";
import React from "react";

type DescriptionVariant = "subtitle1" | "subtitle2" | "subtitle3";

interface DescriptionProps {
  variant?: DescriptionVariant;
  children?: React.ReactNode;
  className?: string;
  parentClassName?: string;
  icon?: string | { src: string };
  description?: React.ReactNode | string;
  style?: React.CSSProperties;
  isHtml?: boolean;
  lineClamp?: number;
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  textColor?: string;
}

const baseStyles: Record<DescriptionVariant, string> = {
  subtitle1:
    "text-[12px] sx:text-[13px] lg:text-[14px] text-text-primary break-normal",
  subtitle2:
    "text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] font-normal text-text-primary break-normal",
  subtitle3:
    "text-[12px] xs:text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-normal text-text-primary break-normal",
};

export const Description: React.FC<DescriptionProps> = ({
  variant = "subtitle2",
  children,
  className,
  parentClassName,
  icon,
  description,
  style,
  isHtml = false,
  lineClamp = 0,
}) => {
  const content = description || children;

  // Common clamp styles (fallback for browsers without line-clamp support)
  const clampStyles =
    lineClamp > 0
      ? {
          display: "-webkit-box",
          WebkitBoxOrient: "vertical" as const,
          WebkitLineClamp: lineClamp,
          overflow: "hidden !important",
          textOverflow: "ellipsis",
        }
      : {
          display: "block",
          overflow: "visible",
        };

  return (
    <div
      className={clsx("flex items-center gap-2", parentClassName)}
      style={style}
    >
      {icon &&
        (typeof icon === "object" && "src" in icon ? (
          <Image src={icon.src} alt='icon' width={16} height={16} />
        ) : (
          icon
        ))}

      {isHtml && typeof content === "string" ? (
        <div
          className={clsx(baseStyles[variant], className)}
          style={{
            ...clampStyles,
            ...(style?.color && { color: style.color }),
            ...(style?.fontWeight && { fontWeight: style.fontWeight }),
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={clsx(baseStyles[variant], className)}
          style={{
            ...clampStyles,
            ...(style?.color && { color: style.color }),
            ...(style?.fontWeight && { fontWeight: style.fontWeight }),
          }}
        >
          {content}
        </p>
      )}
    </div>
  );
};
