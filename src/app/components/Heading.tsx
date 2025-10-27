import clsx from "clsx";
import Image from "next/image";
import React from "react";

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  variant?: HeadingVariant;
  children?: React.ReactNode;
  className?: string;
  icon?: string | JSX.Element;
  heading?: React.ReactNode | string;
}

const baseStyles: Record<HeadingVariant, string> = {
  h1: "text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[48px] font-semibold text-text-primary break-normal whitespace-normal",
  h2: "text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[48px] font-semibold text-text-primary break-normal whitespace-normal",
  h3: "text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[40px] font-semibold text-text-primary break-normal whitespace-normal",
  h4: "text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[29px] font-semibold text-text-primary break-normal whitespace-normal",
  h5: "text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold text-text-primary leading-[22px] sm:leading-[30px] break-normal whitespace-normal",
  h6: "text-[12px] xs:text-[14px] md:text-[15px] xl:text-[16px] 2xl:text-[18px] font-semibold text-text-primary leading-[22px] sm:leading-[30px] break-normal whitespace-normal",
};

export const Heading: React.FC<HeadingProps> = ({
  variant = "h2",
  children,
  className,
  icon,
  heading,
}) => {
  const Component = variant;
  const content = heading || children;

  return (
    <Component
      className={clsx(
        baseStyles[variant],
        "flex items-center gap-2 text-text-primary",
        className
      )}
    >
      {icon && (
        <>
          {typeof icon === "string" ? (
            <Image src={icon} alt='icon' height={24} width={24} />
          ) : (
            icon
          )}
        </>
      )}
      {content}
    </Component>
  );
};
