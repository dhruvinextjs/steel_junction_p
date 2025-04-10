import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex gap-[0.5rem] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        disable:
          "focus:outline-none capitalize bg-[#E6E6E6] text-black font-medium  active:scale-90 transition text-sm",
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline:
          "border-[1px]  border-primary bg-background shadow-sm hover:bg-[#FC342A] hover:text-white",
        secondary:
          "focus:outline-none capitalize bg-[#4CCA5B] text-white font-medium  active:scale-90 transition text-sm",
        primary:
          "focus:outline-none capitalize bg-[#000] hover:bg-[#3d3d3d] text-white font-medium w-full active:scale-90 transition text-sm",
        yellow:
          "focus:outline-none capitalize bg-[#FFD814] text-black font-medium  active:scale-90 transition text-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        danger:
          "focus:outline-none capitalize bg-[#FC342A] text-white font-medium  active:scale-90 transition text-sm",
        blog_button:
          "bg-[#FAFAFA] hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#E6E6E6]",
        green_button:
          "focus:outline-none capitalize bg-[#29AD17] hover:bg-[#36cd22] text-white font-medium  active:scale-90 transition text-sm",
      },
      size: {
        default: "px-6 py-4.5 h-9",
        sm: "h-8 px-5 text-xs",
        lg: "h-10 px-8",
        icon: "h-8 w-5 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      parent = false,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild && Slot) || (parent && "span") || "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        onClick={onClick instanceof Function ? onClick : undefined}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// export default Button;
export { Button, buttonVariants };
