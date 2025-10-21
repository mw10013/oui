import * as React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { composeTailwindRenderProps } from "@/registry/components/ui/oui-base";

// Table is not interactive on first click in SSR : https://github.com/adobe/react-spectrum/issues/8239

export interface TableProps extends Rac.TableProps {
  containerClassName?: string;
}

export function Table({
  className,
  containerClassName,
  children,
  ...props
}: TableProps) {
  return (
    <div
      className={twMerge("relative w-full overflow-x-auto", containerClassName)}
    >
      <Rac.Table
        className={composeTailwindRenderProps(
          className,
          "w-full caption-bottom text-sm",
        )}
        {...props}
      >
        {children}
      </Rac.Table>
    </div>
  );
}

export function TableHeader<T extends object>({
  className,
  ...props
}: Rac.TableHeaderProps<T>) {
  return (
    <Rac.TableHeader
      className={composeTailwindRenderProps(className, "[&_tr]:border-b")}
      {...props}
    />
  );
}

export function TableBody<T extends object>({
  className,
  ...props
}: Rac.TableBodyProps<T>) {
  return (
    <Rac.TableBody
      className={composeTailwindRenderProps(
        className,
        "[&_tr:last-child]:border-0",
      )}
      {...props}
    />
  );
}

export function TableFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot
      className={twMerge(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

export function Row<T extends object>({
  className,
  ...props
}: Rac.RowProps<T>) {
  return (
    <Rac.Row
      className={composeTailwindRenderProps(
        className,
        "data-hovered:bg-muted/50 data-selected:bg-muted border-b transition-colors data-disabled:opacity-50",
      )}
      {...props}
    />
  );
}

export function Column({ className, children, ...props }: Rac.ColumnProps) {
  return (
    <Rac.Column
      className={composeTailwindRenderProps(
        className,
        "text-foreground h-10 whitespace-nowrap px-2 text-left align-middle font-medium",
      )}
      {...props}
    >
      {(renderProps) => {
        const { allowsSorting, sortDirection } = renderProps;
        const content =
          typeof children === "function" ? children(renderProps) : children;
        return (
          <div className="flex items-center gap-2">
            {content}
            {allowsSorting &&
              sortDirection &&
              (sortDirection === "ascending" ? (
                <ArrowUp className="size-4" />
              ) : (
                <ArrowDown className="size-4" />
              ))}
          </div>
        );
      }}
    </Rac.Column>
  );
}

export function Cell({ className, ...props }: Rac.CellProps) {
  return (
    <Rac.Cell
      className={composeTailwindRenderProps(
        className,
        "whitespace-nowrap p-2 align-middle",
      )}
      {...props}
    />
  );
}

export function TableCaption({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      className={twMerge("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}
