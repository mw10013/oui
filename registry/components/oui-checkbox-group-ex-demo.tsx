"use client";
import { CheckboxGroupEx } from "@/registry/components/oui-checkbox-group-ex";
import { Checkbox } from "@/registry/components/ui/oui-checkbox";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

export default function Component() {
  return (
    <CheckboxGroupEx
      name="items"
      labelClassName="text-base"
      label="Sidebar"
      description="Select the items you want to display in the sidebar."
      defaultValue={["recents", "home"]}
    >
      {items.map((item) => (
        <Checkbox
          key={item.id}
          value={item.id}
          className="text-sm leading-tight font-normal"
        >
          {item.label}
        </Checkbox>
      ))}
    </CheckboxGroupEx>
  );
}
