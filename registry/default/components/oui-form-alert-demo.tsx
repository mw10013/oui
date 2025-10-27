import { FormAlert } from "@/registry/default/components/oui-form-alert";
import { TextFieldEx } from "@/registry/default/components/oui-text-field-ex";
import { Button } from "@/registry/default/ui/oui-button";
import { Form } from "@/registry/default/ui/oui-form";

export default function Component() {
  return (
    <Form className="max-w-sm">
      <FormAlert
        success={false}
        message="Failed to send magic link"
        details="Please check your email address and try again."
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
    </Form>
  );
}
