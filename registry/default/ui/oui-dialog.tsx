"use client";

import { XIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

/**
 * Derived from shadcn DialogContent.
 *
 * @param showCloseButton - Show the close button for non-'alertdialog' role. 'alertdialog' role never shows a close button to ensure users cannot dismiss alerts without taking action, per accessibility guidelines.
 * @default true
 */
export function Dialog({
  showCloseButton = true,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Rac.Dialog> & {
  showCloseButton?: boolean;
}) {
  return (
    <Rac.Dialog
      data-slot="dialog"
      className={twMerge("grid gap-4 outline-none", className)}
      {...props}
    >
      {(renderProps) => (
        <>
          {typeof children === "function" ? children(renderProps) : children}
          {showCloseButton && props.role !== "alertdialog" && (
            <Rac.Button
              data-slot="dialog-close-button"
              slot="close"
              aria-label="Close"
              className={twJoin(
                "absolute top-4 right-4 rounded-sm p-1 opacity-70 transition-opacity",
                "data-hovered:bg-accent data-hovered:text-muted-foreground data-hovered:opacity-100",
                "data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-offset-2 data-focus-visible:ring-offset-background data-focus-visible:outline-none",
                "data-disabled:pointer-events-none",
              )}
            >
              <XIcon className="size-4" />
            </Rac.Button>
          )}
        </>
      )}
    </Rac.Dialog>
  );
}

/**
 * Derived from shadcn DialogHeader
 */
export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={twMerge(
        "flex flex-col gap-2 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Derived from shadcn DialogFooter
 */
export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-footer"
      className={twMerge(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Wraps Rac.Heading with slot="title".
 * 
 * Derived from shadcn DialogTitle
 *  
 */
export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof Rac.Heading>) {
  return (
    <Rac.Heading
      data-slot="dialog-title"
      slot="title"
      className={twMerge("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

/**
 * Derived from shadcn DialogDescription
 */
export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="dialog-description"
      className={twMerge("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
