"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { ButtonGroup } from "@/registry/default/ui/oui-button-group";
import { ComboBox } from "@/registry/default/ui/oui-combo-box";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { ListBoxHeader, ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { ChevronsUpDown } from "lucide-react";
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
    <ComboBox
      defaultSelectedKey={timezones[0].timezones[0].value}
      className="md:max-w-[200px]"
    >
      <FieldLabel>Combo Box with Headers</FieldLabel>
      <ButtonGroup>
        <Input />
        <Button variant="outline" size="icon">
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </ButtonGroup>
      <FieldError />
      <Popover>
        <Rac.ListBox>
          {timezones.map((group) => (
            <Rac.ListBoxSection key={group.label}>
              <ListBoxHeader>{group.label}</ListBoxHeader>
              <Rac.Collection items={group.timezones}>
                {(item) => (
                  <ListBoxItem id={item.value}>{item.label}</ListBoxItem>
                )}
              </Rac.Collection>
            </Rac.ListBoxSection>
          ))}
        </Rac.ListBox>
      </Popover>
    </ComboBox>
  );
}
