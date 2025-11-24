import {
  FieldContent,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/default/ui/field";
import * as Oui from "@/registry/default/ui/oui-index";
import { twJoin } from "tailwind-merge";

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <Field>
        <Oui.Input />
        <FieldDescription />
      </Field>
      <Field>
        <Oui.Input />
        <FieldDescription />
        <FieldError />
      </Field>
      <Field>
        <Oui.Input />
        <FieldDescription>Field description with RacHidden</FieldDescription>
        <RacHidden />
      </Field>
      <Field>
        <Oui.Input />
        <FieldDescription>Field description with RacHidden</FieldDescription>
        <FieldError />
        <RacHidden />
      </Field>
      <Field>
        <FieldDescription />
        <Oui.Input />
        <FieldError />
      </Field>
      <Field>
        <FieldDescription>Field description with RacHidden</FieldDescription>
        <Oui.Input />
        <FieldError />
        <RacHidden />
      </Field>
      {/* Test cases for second to last visible */}
      <Field>
        <FieldDescription>Test: FD + Input</FieldDescription>
        <Oui.Input />
      </Field>
      <Field>
        <FieldDescription>Test: FD + Input + RacHidden</FieldDescription>
        <Oui.Input />
        <RacHidden />
      </Field>
      <Field>
        <FieldDescription>Test: FD + Input + Error</FieldDescription>
        <Oui.Input />
        <FieldError />
      </Field>
      <Field>
        <FieldDescription>
          Test: FD + Input + Error + RacHidden
        </FieldDescription>
        <Oui.Input />
        <FieldError />
        <RacHidden />
      </Field>
      <OuiFieldCheckboxDemo />
      <OuiFieldCheckboxDemo1 />
    </div>
  );
}

function Field(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field"
      className="group/field flex flex-col gap-3"
      {...props}
    />
  );
}

function FieldDescription({ children, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={twJoin(
        "last:before:content-['last:_'] nth-last-2:before:content-['nth-last-2:_']",
        // "after:content-[':_after']",
        "last:after:content-[':_last']",
        "[&:has(+[aria-hidden])]:after:content-[':_last_visible']",
        // "[&:has(+:not([aria-hidden]))]:after:content-[':_second_last_visible']",
        "[&:has(+[data-slot=field-error])]:after:content-[':_followed_by_field_error']",
        "[&:has(+_:not([aria-hidden])):not(:has(+_:not([aria-hidden])~_:not([aria-hidden])))]:after:content-[':_second_last_visible']",
      )}
      {...props}
    >
      {children ?? "Field description"}
    </p>
  );
}

function FieldError() {
  return <div data-slot="field-error">Field Error</div>;
}

/*
<div style="border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:fixed;width:1px;white-space:nowrap;top:0;left:0" 
aria-hidden="true" data-react-aria-prevent-focus="true" data-a11y-ignore="aria-hidden-focus" data-testid="hidden-select-container">
<label><select tabindex="-1" title=""><option selected=""></option><option value="react-aria-1">Engineering</option><option value="react-aria-2">Design</option><option value="react-aria-3">Marketing</option><option value="react-aria-4">Sales</option><option value="react-aria-5">Customer Support</option><option value="react-aria-6">Human Resources</option><option value="react-aria-7">Finance</option><option value="react-aria-8">Operations</option></select></label></div>
*/

function RacHidden() {
  return (
    <div
      style={{
        border: 0,
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        width: "1px",
        whiteSpace: "nowrap",
        top: 0,
        left: 0,
      }}
      aria-hidden="true"
      data-react-aria-prevent-focus="true"
      data-a11y-ignore="aria-hidden-focus"
      data-testid="hidden-select-container"
    >
      Rac Hidden
    </div>
  );
}

function OuiFieldCheckboxDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            Show these items on the desktop
          </FieldLegend>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <FieldGroup className="gap-3">
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox
                id="oui-finder-pref-9k2-hard-disks-ljj"
                defaultSelected
              />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
              >
                Hard disks
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-external-disks-1yg" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                External disks
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-cds-dvds-fzt" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                CDs, DVDs, and iPods
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-connected-servers-6l2" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                Connected servers
              </Oui.FieldLabel>
            </Oui.Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Oui.Field orientation="horizontal">
          <Oui.Checkbox
            id="oui-finder-pref-9k2-sync-folders-nep"
            defaultSelected
          />
          <FieldContent>
            <Oui.FieldLabel htmlFor="oui-finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </Oui.FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud
              Drive. You can access them from other devices.
            </FieldDescription>
          </FieldContent>
        </Oui.Field>
      </FieldGroup>
    </div>
  );
}

function OuiFieldCheckboxDemo1() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            Show these items on the desktop
          </FieldLegend>
          <Oui.FieldDescription>
            Select the items you want to show on the desktop.
          </Oui.FieldDescription>
          <FieldGroup className="gap-3">
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox
                id="oui-finder-pref-9k2-hard-disks-ljj"
                defaultSelected
              />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
              >
                Hard disks
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-external-disks-1yg" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                External disks
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-cds-dvds-fzt" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                CDs, DVDs, and iPods
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-connected-servers-6l2" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                Connected servers
              </Oui.FieldLabel>
            </Oui.Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Oui.Field orientation="horizontal">
          <Oui.Checkbox
            id="oui-finder-pref-9k2-sync-folders-nep"
            defaultSelected
          />
          <FieldContent>
            <Oui.FieldLabel htmlFor="oui-finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </Oui.FieldLabel>
            <Oui.FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud
              Drive. You can access them from other devices.
            </Oui.FieldDescription>
          </FieldContent>
        </Oui.Field>
      </FieldGroup>
    </div>
  );
}
