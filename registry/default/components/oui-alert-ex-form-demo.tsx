import type { AlertExFormActionResult } from "@/registry/default/components/oui-alert-ex-form";
import { AlertExForm } from "@/registry/default/components/oui-alert-ex-form";
import { Button } from "@/registry/default/ui/oui-button";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { TextField } from "@/registry/default/ui/oui-text-field";
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
      <TextField name="email" type="email" isRequired>
        <FieldLabel>Email</FieldLabel>
        <Input placeholder="m@example.com" />
        <FieldError />
      </TextField>
      <Button type="submit" className="w-full">
        Send magic link
      </Button>
    </Rac.Form>
  );
}
