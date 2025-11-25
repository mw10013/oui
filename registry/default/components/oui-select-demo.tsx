"use client";

import { FieldDescription, FieldLabel } from "@/registry/default/ui/oui-field";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <Select placeholder="Choose department" className="w-fit">
        <FieldLabel>Department</FieldLabel>
        <SelectButton>
          <SelectValue />
        </SelectButton>
        <FieldDescription>
          Select your department or area of work.
        </FieldDescription>
        <Popover>
          <Rac.ListBox>
            <ListBoxItem>Engineering</ListBoxItem>
            <ListBoxItem>Design</ListBoxItem>
            <ListBoxItem>Marketing</ListBoxItem>
            <ListBoxItem>Sales</ListBoxItem>
            <ListBoxItem>Customer Support</ListBoxItem>
            <ListBoxItem>Human Resources</ListBoxItem>
            <ListBoxItem>Finance</ListBoxItem>
            <ListBoxItem>Operations</ListBoxItem>
          </Rac.ListBox>
        </Popover>
      </Select>
    </div>
  );
}
