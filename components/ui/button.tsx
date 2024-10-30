import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define button variants and sizes using class-variance-authority (cva)
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",   // Default button size
        sm: "h-8 rounded-md px-3 text-xs", // Small button
        lg: "h-10 rounded-md px-8",  // Large button
        icon: "h-9 w-9",  // Icon button (square size)
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button component interface extending button props and variant props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// ForwardRef to provide ref forwarding functionality for the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Dynamically render `Slot` if asChild is true, else render `button`
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Apply appropriate variant and size classes
        ref={ref}
        {...props} // Spread remaining props
      />
    );
  }
);

Button.displayName = "Button"; // Set display name for easier debugging

export { Button, buttonVariants };
