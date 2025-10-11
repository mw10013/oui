import {
  composeTailwindRenderProps,
  disabledStyles,
  focusVisibleStyles,
} from "@/registry/components/ui/oui-base";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Tabs({ className, ...props }: Rac.TabsProps) {
  return (
    <Rac.Tabs
      data-slot="tabs"
      className={composeTailwindRenderProps(className, "flex flex-col gap-2")}
      {...props}
    />
  );
}

export function TabsList({ className, ...props }: Rac.TabListProps<object>) {
  return (
    <Rac.TabList
      data-slot="tabs-list"
      className={composeTailwindRenderProps(className, [
        "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
      ])}
      {...props}
    />
  );
}

export function TabsTrigger({ className, children, ...props }: Rac.TabProps) {
  return (
    <Rac.Tab
      data-slot="tabs-trigger"
      className={Rac.composeRenderProps(className, (className, _renderProps) =>
        twMerge(
          focusVisibleStyles,
          disabledStyles,
          "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:shadow-sm dark:text-muted-foreground dark:data-[selected]:border-input dark:data-[selected]:bg-input/30 dark:data-[selected]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className,
        ),
      )}
      {...props}
    >
      {children}
    </Rac.Tab>
  );
}

export function TabsContent({ className, ...props }: Rac.TabPanelProps) {
  return (
    <Rac.TabPanel
      data-slot="tabs-content"
      className={composeTailwindRenderProps(className, "flex-1 outline-none")}
      {...props}
    />
  );
}
