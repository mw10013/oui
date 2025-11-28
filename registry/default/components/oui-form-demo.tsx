"use client";

import { CheckboxGroupEx } from "@/registry/default/components/oui-checkbox-group-ex";
import { RadioGroupEx } from "@/registry/default/components/oui-radio-group-ex";
import { SwitchEx } from "@/registry/default/components/oui-switch-ex";
import { Button } from "@/registry/default/ui/oui-button";
import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import {
  FieldCheckbox,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { Radio } from "@/registry/default/ui/oui-radio-group";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import { TextArea } from "@/registry/default/ui/oui-text-area";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

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
    <Rac.Form className="max-w-sm">
      <TextField name="username">
        <FieldLabel>Username</FieldLabel>
        <Input placeholder="shadcn" />
        <FieldDescription>This is your public display name.</FieldDescription>
        <FieldError />
      </TextField>
      <Select placeholder="Select a verified email to display">
        <FieldLabel>Email</FieldLabel>
        <SelectButton>
          <SelectValue />
        </SelectButton>
        <FieldDescription>
          You can manage email addresses in your email settings.
        </FieldDescription>
        <FieldError />
        <Popover>
          <Rac.ListBox>
            <ListBoxItem>m@example.com</ListBoxItem>
            <ListBoxItem>me@google.com</ListBoxItem>
            <ListBoxItem>m@support.com</ListBoxItem>
          </Rac.ListBox>
        </Popover>
      </Select>
      <TextField name="bio">
        <FieldLabel>Bio</FieldLabel>
        <TextArea
          className="resize-none"
          placeholder="Tell us a little bit about yourself"
        />
        <FieldDescription>
          You can @mention other users and organizations.
        </FieldDescription>
        <FieldError />
      </TextField>
      <RadioGroupEx
        name="type"
        label="Notify me about..."
        className="flex flex-col gap-3"
      >
        <Radio value="all" className="font-normal">
          All new messages
        </Radio>
        <Radio value="mentions" className="font-normal">
          Direct messages and mentions
        </Radio>
        <Radio value="none" className="font-normal">
          Nothing
        </Radio>
      </RadioGroupEx>
      <FieldCheckbox className="rounded-md border p-4 shadow-xs">
        <Checkbox name="mobile">
          Use different settings for my mobile devices
        </Checkbox>
        <FieldDescription>
          You can manage your mobile notifications in the mobile settings page.
        </FieldDescription>
      </FieldCheckbox>
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
      <div>
        <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
        <div className="flex flex-col gap-4">
          <SwitchEx
            name="marketing_emails"
            descriptionClassName="leading-snug"
            description="Receive emails about new products, features, and more."
            indicatorPosition="end"
            // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
            containerClassName="shadow-xs rounded-lg border p-4"
            className="leading-snug"
          >
            Marketing emails
          </SwitchEx>
          <SwitchEx
            name="security_emails"
            descriptionClassName="leading-snug"
            description="Receive emails about your account security."
            indicatorPosition="end"
            // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
            containerClassName="shadow-xs rounded-lg border p-4"
            className="leading-normal"
            isDisabled
          >
            Security emails
          </SwitchEx>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </Rac.Form>
  );
}
