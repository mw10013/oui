"use client";

import { ComboBoxEx } from "@/registry/default/components/oui-combo-box-ex";
import { Header } from "@/registry/default/ui/oui-header";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import * as Rac from "react-aria-components";

const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
];

export default function Component() {
  return (
    <ComboBoxEx
      label="ComboBoxEx with Headers"
      defaultSelectedKey={timezones[0].timezones[0].value}
      className="md:max-w-[200px]"
    >
      {timezones.map((group) => (
        <Rac.ListBoxSection key={group.label}>
          <Header variant="select">{group.label}</Header>
          <Rac.Collection items={group.timezones}>
            {(item) => <ListBoxItem id={item.value}>{item.label}</ListBoxItem>}
          </Rac.Collection>
        </Rac.ListBoxSection>
      ))}
    </ComboBoxEx>
  );
}
