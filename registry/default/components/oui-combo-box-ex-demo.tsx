"use client";

import { ComboBoxEx } from "@/registry/default/components/oui-combo-box-ex";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function Component() {
  return (
    <ComboBoxEx
      label="Combo Box Ex"
      placeholder="Select framework..."
      items={frameworks}
      className="md:max-w-[200px]"
    >
      {(item) => <ListBoxItem id={item.value}>{item.label}</ListBoxItem>}
    </ComboBoxEx>
  );
}
