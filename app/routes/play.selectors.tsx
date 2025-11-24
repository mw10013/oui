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
