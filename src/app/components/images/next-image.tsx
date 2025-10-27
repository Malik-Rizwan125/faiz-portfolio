import Image, { StaticImageData } from "next/image";
import { FC, MouseEventHandler } from "react";

interface NextImageProps {
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: MouseEventHandler<HTMLImageElement>;
  variant?: "image" | "icon";
  sizes?: string;
  fill?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  layout?: string;
  unoptimized?: boolean;
  onError?: () => void;
  onLoad?: () => void;
}

const NextImage: FC<NextImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  onClick,
  variant = "image",
  sizes,
  fill = false,
  objectFit,
  priority = false,
  unoptimized = false,
  onError,
  onLoad,
}) => {
  // Default values based on variant
  const defaultWidth = variant === "icon" ? 24 : 100;
  const defaultHeight = variant === "icon" ? 24 : 100;
  const defaultAlt = variant === "icon" ? "" : "alt description";
  const defaultSrc = variant === "icon" ? "" : "/";

  // Default sizes based on variant (only if not provided and not using fill)
  const defaultSizes =
    variant === "icon"
      ? "(max-width: 500px) 50px, (max-width: 1023px) 50px, 50px"
      : "(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px";

  // Use custom sizes if provided, otherwise use defaults (but not when fill is true)
  const finalSizes =
    sizes ||
    (fill
      ? variant === "icon"
        ? "(max-width: 500px) 24px, (max-width: 1023px) 24px, 24px"
        : "(max-width: 500px) 100vw, (max-width: 1023px) 50vw, 33vw"
      : defaultSizes);

  // Apply object-fit based on variant and custom objectFit prop
  let finalClassName = className
    ? className
    : `w-[${width ?? defaultWidth}px] h-[${height ?? defaultHeight}px]`;

  // Add default object-cover for images if no custom objectFit is provided
  if (variant === "image" && !objectFit) {
    finalClassName = `${finalClassName} object-cover`.trim();
  }

  // Add custom object-fit class if provided
  if (objectFit) {
    finalClassName = `${finalClassName} object-${objectFit}`.trim();
  }

  // Handle empty string src - convert to null or use defaultSrc
  const finalSrc =
    src === "" ? (defaultSrc === "" ? null : defaultSrc) : (src ?? defaultSrc);

  // Don't render if src is null or empty and no defaultSrc
  if (!finalSrc) {
    return null;
  }

  return (
    <Image
      src={finalSrc}
      priority={priority}
      alt={alt ?? defaultAlt}
      {...(fill
        ? { fill: true }
        : { width: width ?? defaultWidth, height: height ?? defaultHeight })}
      sizes={finalSizes}
      className={finalClassName}
      unoptimized={unoptimized}
      onError={onError}
      onLoad={onLoad}
      // style={{
      //   width: fill ? undefined : `${width ?? defaultWidth}px`,
      //   height: fill ? undefined : `${height ?? defaultHeight}px`,
      // }}
      onClick={onClick}
    />
  );
};

export default NextImage;
