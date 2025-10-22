"use client";
import { TextFieldEx } from "@/registry/components/oui-text-field-ex";
import { TextArea } from "@/registry/components/ui/oui-text-area";

export default function Component() {
  return (
    <TextFieldEx name="textarea-demo-disabled" label="Text Area Disabled" isDisabled>
      <TextArea placeholder="Type your message here." />
    </TextFieldEx>
  );
}
