"use client";
import { TextFieldEx } from "@/registry/components/oui-text-field-ex";
import { TextArea } from "@/registry/components/ui/oui-text-area";

export default function Component() {
  return (
    <TextFieldEx
      name="textarea-textarea"
      label="Text Area"
      description="Type your message and press enter to send."
    >
      <TextArea placeholder="Type your message here." rows={6} />
    </TextFieldEx>
  );
}
