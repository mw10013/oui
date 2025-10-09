import * as React from "react";
import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";

export function Tooltip({
  className,
  offset = 7,
  ...props
}: React.ComponentProps<typeof Rac.Tooltip> & { offset?: number }) {
  return (
    <Rac.Tooltip
      offset={offset}
      className={composeTailwindRenderProps(className, [
        "z-50 w-fit rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-balance text-popover-foreground shadow-md",
        "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95",
        "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
        "data-[placement=bottom]:slide-in-from-top-2",
        "data-[placement=left]:slide-in-from-right-2",
        "data-[placement=right]:slide-in-from-left-2",
        "data-[placement=top]:slide-in-from-bottom-2",
        "transform-origin-[var(--trigger-anchor-point)]",
      ])}
      {...props}
    />
  );
}

export function OverlayArrow(
  props: React.ComponentProps<typeof Rac.OverlayArrow>,
) {
  return (
    <Rac.OverlayArrow
      className={composeTailwindRenderProps(
        props.className,
        "fill-popover stroke-border",
      )}
      {...props}
    >
      <svg width={8} height={8} viewBox="0 0 8 8" className="size-2">
        <path d="m0 0 4 4 4-4" />
      </svg>
    </Rac.OverlayArrow>
  );
}
