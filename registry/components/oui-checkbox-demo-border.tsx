import { Checkbox } from "@/registry/components/ui/oui-checkbox";

export default function Component() {
  return (
    <Checkbox
      name="toggle"
      defaultSelected
      className="rounded-lg border p-3 data-hovered:bg-accent/50 data-selected:border-blue-600 data-selected:bg-blue-50 dark:data-selected:border-blue-900 dark:data-selected:bg-blue-950"
      indicatorClassName="group-data-selected:border-blue-600 group-data-selected:bg-blue-600 group-data-selected:text-white dark:group-data-selected:border-blue-700 dark:group-data-selected:bg-blue-700"
    >
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-sm text-muted-foreground">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Checkbox>
  );
}
