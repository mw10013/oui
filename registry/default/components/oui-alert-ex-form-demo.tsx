import type { AlertExFormActionResult } from "@/registry/default/components/oui-alert-ex-form";
import { AlertExForm } from "@/registry/default/components/oui-alert-ex-form";
import { TextFieldEx } from "@/registry/default/components/oui-text-field-ex";
import { Button } from "@/registry/default/ui/oui-button";
import * as Rac from "react-aria-components";

export default function Component() {
  const actionData: AlertExFormActionResult = {
    success: false,
    message: "Failed to send magic link",
    details: "Please check your email address and try again.",
    validationErrors: { email: "Invalid email address" },
  };

  return (
    <Rac.Form
      className="flex max-w-sm flex-col gap-6"
      validationErrors={actionData.validationErrors}
    >
      <AlertExForm
        success={actionData.success}
        message={actionData.message}
        details={actionData.details}
      />
      <TextFieldEx
        name="email"
        type="email"
        label="Email"
        placeholder="m@example.com"
        isRequired
      />
      <Button type="submit" className="w-full">
        Send magic link
      </Button>
    </Rac.Form>
  );
}
