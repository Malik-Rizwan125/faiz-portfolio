import React from "react";

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`container py-8 lg:py-9 xl:py-10 2xl:py-[50px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
