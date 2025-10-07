import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { disabledStyles, focusVisibleStyles } from "@/registry/components/ui/oui-base";

/**
 * Derived from shadcn Button.
 * Rac.Button does not support aria-invalid or have data-invalid.
 */
export const buttonVariants = cva(
  [
    focusVisibleStyles,
    disabledStyles,
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs data-[hovered]:bg-primary/90",
        destructive:
          "bg-destructive shadow-xs data-[hovered]:bg-destructive/90 data-[focus-visible]:ring-destructive/20 dark:data-[focus-visible]:ring-destructive/40 dark:bg-destructive/60 text-white",
        outline:
          "bg-background shadow-xs data-[hovered]:bg-accent data-[hovered]:text-accent-foreground dark:bg-input/30 dark:border-input dark:data-[hovered]:bg-input/50 border",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs data-[hovered]:bg-secondary/80",
        ghost:
          "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground dark:data-[hovered]:bg-accent/50",
        link: "text-primary underline-offset-4 data-[hovered]:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Returns a className function to style a React Aria Component as a button.
 *
 * @example
 * <Link
 *   href="#"
 *   className={buttonClassName({ variant: "outline" })}
 * >
 *   Button Link
 * </Link>
 */
export const buttonClassName =
  (props: VariantProps<typeof buttonVariants>) =>
  // The renderProps type omits variant props (variant, size) from the buttonVariants parameters,
  // resulting in the RAC render props (isHovered, isPressed, etc.) for compatibility across components.
  (
    renderProps: Omit<
      Parameters<typeof buttonVariants>[0],
      keyof VariantProps<typeof buttonVariants>
    >,
  ) =>
    buttonVariants({ ...renderProps, ...props });

export interface ButtonProps
  extends Rac.ButtonProps,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <Rac.Button
      data-slot="button"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        twMerge(
          buttonVariants({
            ...renderProps,
            variant,
            size,
            className,
          }),
        ),
      )}
      {...props}
    />
  );
}
