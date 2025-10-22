"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { Button } from "@/registry/default/ui/oui-button";
import { useSidebar } from "@/registry/default/ui/sidebar";
import { cva } from "class-variance-authority";
import { ChevronRight, PanelLeftIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Experimental
 * Do we need SidebarTrigger? Then should be moved to button-ex-sidebar
 * Probably don't need SidbarListBox, et al since that experiment was unsuccessful
 * SidebarTreeEx -> tree-ex-sidebar
 */

export function SidebarTrigger({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  className,
  onPress,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      aria-label={!ariaLabel && !ariaLabelledBy ? "Toggle sidebar" : ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={composeTailwindRenderProps(className, "size-7")}
      onPress={(e) => {
        onPress?.(e);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
    </Button>
  );
}

/**
 * Derived from shadcn SidebarMenu
 */
export function SidebarListBox<T extends object>({
  className,
  ...props
}: Rac.ListBoxProps<T>) {
  return (
    <Rac.ListBox<T>
      className={composeTailwindRenderProps(
        className,
        "flex w-full min-w-0 flex-col gap-1",
      )}
      data-slot="sidebar-listbox"
      {...props}
    />
  );
}

export interface SidebarListBoxSectionProps<T extends object = object>
  extends Rac.ListBoxSectionProps<T> {
  title: React.ReactNode;
}

/**
 * Derived from shadcn SidebarGroup, SidebarGroupLabel, and SidebarGroupContent
 */
export function SidebarListBoxSection<T extends object>({
  className,
  title,
  items,
  children,
  ...props
}: SidebarListBoxSectionProps<T>) {
  return (
    <Rac.ListBoxSection<T>
      className={twMerge(
        "relative flex w-full min-w-0 flex-col p-2",
        className,
      )}
      {...props}
    >
      <Rac.Header className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0">
        {title}
      </Rac.Header>
      <div className="w-full text-sm">
        <Rac.Collection items={items}>{children}</Rac.Collection>
      </div>
    </Rac.ListBoxSection>
  );
}

export const sidebarListBoxItemVariants = cva(
  [
    "group/menu-item relative", // from SidebarMenuItem
    "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding]",
    "group-has-data-[sidebar=menu-action]/menu-item:pr-8", // Adjusted from -has-data-[sidebar=menu-action]/menu-item:pr-8
    "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    // States from sidebarMenuButtonVariants
    "data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground",
    "data-[focused]:ring-2", // from focus-visible:ring-2
    "data-[focus-visible]:ring-2", // RAC uses focus-visible
    "data-[pressed]:bg-sidebar-accent data-[pressed]:text-sidebar-accent-foreground", // from active:
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "data-[selected]:bg-sidebar-accent data-[selected]:font-medium data-[selected]:text-sidebar-accent-foreground", // from data-[active=true]
    // data-[state=open] is not directly applicable to ListBoxItem, but hover styles are covered
    "group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!", // These are from the parent context, might need adjustment or removal if not applicable via RAC props
  ],
  {
    variants: {
      variant: {
        default:
          "data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground", // from hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground data-[hovered]:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!", // This might also need context adjustment
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface SidebarListBoxItemProps<T extends object = object>
  extends Rac.ListBoxItemProps<T>,
    VariantProps<typeof sidebarListBoxItemVariants> {}

/**
 * Derived from shadcn SidebarMenuButton and SidebarMenuItem
 */
export function SidebarListBoxItem<T extends object>({
  className,
  variant,
  size,
  ...props
}: SidebarListBoxItemProps<T>) {
  return (
    <Rac.ListBoxItem<T>
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        twMerge(
          sidebarListBoxItemVariants({
            ...renderProps,
            variant,
            size,
            className,
          }),
        ),
      )}
    />
  );
}

export interface SidebarTreeNodeEx {
  id: string;
  title?: string;
  href?: string;
  "data-testid"?: string;
  children?: SidebarTreeNodeEx[];
}

export interface SidebarTreeItemContentExProps
  extends Rac.TreeItemContentProps {
  href?: string;
}

export function SidebarTreeItemContentEx({
  children,
  href,
  ...props
}: SidebarTreeItemContentExProps) {
  return (
    <Rac.TreeItemContent {...props}>
      {(renderProps) => {
        return (
          <div
            className={twMerge(
              "flex h-8 shrink-0 items-center rounded-md px-2 text-sm text-sidebar-foreground ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear [&>svg]:size-4 [&>svg]:shrink-0",
              "data-hovered:bg-transparent data-hovered:text-current dark:data-hovered:bg-transparent",
              renderProps.hasChildItems && "font-medium",
              renderProps.isHovered &&
                "bg-sidebar-accent text-sidebar-accent-foreground",
              renderProps.isFocusVisible && "ring-2",
              href ? "cursor-pointer" : "cursor-default",
            )}
          >
            {typeof children === "function" ? children(renderProps) : children}
            {renderProps.hasChildItems && (
              <Button
                slot="chevron"
                variant="ghost"
                size="icon"
                className="ml-auto"
              >
                <ChevronRight
                  className={twMerge(
                    "transition-transform",
                    renderProps.isExpanded && "rotate-90",
                  )}
                />
              </Button>
            )}
          </div>
        );
      }}
    </Rac.TreeItemContent>
  );
}

export interface SidebarTreeItemPropsEx extends Partial<Rac.TreeItemProps> {
  title: string;
}

export function SidebarTreeItemEx({
  title,
  className,
  children,
  ...props
}: SidebarTreeItemPropsEx) {
  return (
    <Rac.TreeItem
      textValue={title}
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        twMerge(
          "outline-none",
          renderProps.hasChildItems && "mt-4 first:mt-0",
          renderProps.isFocusVisible && "relative z-10",
          className,
        ),
      )}
    >
      <SidebarTreeItemContentEx href={props.href}>
        {title}
      </SidebarTreeItemContentEx>
      {children}
    </Rac.TreeItem>
  );
}

/**
 * Derived from SidebarGroup
 */
export function SidebarTreeEx(props: Rac.TreeProps<SidebarTreeNodeEx>) {
  return (
    <Rac.Tree {...props} className="relative flex w-full min-w-0 flex-col p-2">
      {function renderSidebarTreeNodeEx(item) {
        return (
          <SidebarTreeItemEx
            key={item.id}
            id={item.id}
            title={item.title ?? item.id}
            href={item.href}
            data-testid={item["data-testid"]}
          >
            <Rac.Collection items={item.children}>
              {renderSidebarTreeNodeEx}
            </Rac.Collection>
          </SidebarTreeItemEx>
        );
      }}
    </Rac.Tree>
  );
}
