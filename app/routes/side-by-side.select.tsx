"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import * as Oui from "@/registry/default/ui/oui-index";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import * as Rac from "react-aria-components";

function FieldSelectDemo() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel>Department</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Customer Support</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>
          Select your department or area of work.
        </FieldDescription>
      </Field>
    </div>
  );
}

function OuiFieldSelectDemo() {
  return (
    <div className="w-full max-w-md">
      <Oui.Select placeholder="Choose department">
        <Oui.FieldLabel>Department</Oui.FieldLabel>
        <Oui.SelectButton>
          <Oui.SelectValue />
        </Oui.SelectButton>
        <Oui.FieldDescription>
          Select your department or area of work.
        </Oui.FieldDescription>
        <Oui.Popover>
          <Rac.ListBox>
            <Oui.ListBoxItem>Engineering</Oui.ListBoxItem>
            <Oui.ListBoxItem>Design</Oui.ListBoxItem>
            <Oui.ListBoxItem>Marketing</Oui.ListBoxItem>
            <Oui.ListBoxItem>Sales</Oui.ListBoxItem>
            <Oui.ListBoxItem>Customer Support</Oui.ListBoxItem>
            <Oui.ListBoxItem>Human Resources</Oui.ListBoxItem>
            <Oui.ListBoxItem>Finance</Oui.ListBoxItem>
            <Oui.ListBoxItem>Operations</Oui.ListBoxItem>
          </Rac.ListBox>
        </Oui.Popover>
      </Oui.Select>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Select"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.select.tsx"
    >
      <SideBySideSection
        title="Field"
        shadcn={<FieldSelectDemo />}
        oui={<OuiFieldSelectDemo />}
      />
    </SideBySidePage>
  );
}
