"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import { CheckboxGroup } from "@/registry/default/ui/oui-checkbox-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { Radio, RadioGroup } from "@/registry/default/ui/oui-radio-group";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import { Switch } from "@/registry/default/ui/oui-switch";
import { TextArea } from "@/registry/default/ui/oui-text-area";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.Form className="max-w-sm">
      <FieldGroup>
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
        <RadioGroup name="type">
          <FieldLabel>Notify me about...</FieldLabel>
          <Radio value="all">All new messages</Radio>
          <Radio value="mentions">Direct messages and mentions</Radio>
          <Radio value="none">Nothing</Radio>
        </RadioGroup>
        <Checkbox name="mobile">
          <FieldContent>
            <FieldTitle>
              Use different settings for my mobile devices
            </FieldTitle>
            <FieldDescription>
              You can manage your mobile notifications in the mobile settings
              page.
            </FieldDescription>
          </FieldContent>
        </Checkbox>
        <CheckboxGroup defaultValue={["recents", "home"]}>
          <FieldLabel className="text-base">Sidebar</FieldLabel>
          <FieldDescription>
            Select the items you want to show in the sidebar.
          </FieldDescription>
          <Checkbox value="recents">Recents</Checkbox>
          <Checkbox value="home">Home</Checkbox>
          <Checkbox value="applications">Applications</Checkbox>
          <Checkbox value="desktop">Desktop</Checkbox>
          <Checkbox value="downloads">Downloads</Checkbox>
          <Checkbox value="documents">Documents</Checkbox>
        </CheckboxGroup>
        <FieldSet>
          <FieldLegend>Email Notifications</FieldLegend>
          <FieldGroup>
            <Switch defaultSelected className="flex-row-reverse">
              <FieldContent>
                <FieldTitle>Marketing emails</FieldTitle>
                <FieldDescription>
                  Receive emails about new products, features, and more.
                </FieldDescription>
              </FieldContent>
            </Switch>
            <Switch isDisabled className="flex-row-reverse">
              <FieldContent>
                <FieldTitle>Security emails</FieldTitle>
                <FieldDescription>
                  Receive emails about your account security.
                </FieldDescription>
              </FieldContent>
            </Switch>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </Rac.Form>
  );
}
