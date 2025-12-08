"use client";

import { XIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

/**
 * Dialog supports both regular dialogs and alert dialogs.
 * For regular dialogs, use without a role prop. For alert dialogs, set role="alertdialog".
 * Unlike Shadcn UI and Radix UI, which provide separate Dialog and AlertDialog components,
 * this RAC-based implementation uses a single Dialog component configurable via the role prop.
 * Alert dialogs are meant for important prompts requiring user action and do not display
 * a close button by default to prevent dismissal without interaction, per accessibility guidelines.
 *
 * @param showCloseButton - Show the close button for non-'alertdialog' role. 'alertdialog' role never shows a close button to ensure users cannot dismiss alerts without taking action, per accessibility guidelines.
 * @default true
 *
 * Derived from shadcn DialogContent.
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
