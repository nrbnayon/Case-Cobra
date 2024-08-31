import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        className="pointer-events-none z-50 select-none"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone template"
        layout="responsive"
        width={10}
        height={10}
      />
      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover z-50 select-none"
          src={imgSrc}
          alt="Overlaying phone image"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Phone;
