"use client";

import * as React from "react";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";

function TextFieldWrapper(props: React.ComponentProps<typeof Oui.TextField>) {
  const context = React.useContext(Rac.TextFieldContext);
  console.log("TextField context:", JSON.stringify(context, null, 2));
  return <Oui.TextField {...props} />;
}

function FormLabelWrapper(props: React.ComponentProps<typeof Oui.Label>) {
  const context = React.useContext(Rac.LabelContext);
  console.log("Label context:", JSON.stringify(context, null, 2));
  return <Oui.Label {...props} />;
}

function InputWrapper(props: React.ComponentProps<typeof Oui.Input>) {
  const context = React.useContext(Rac.InputContext);
  console.log("Input context:", JSON.stringify(context, null, 2));
  return <Oui.Input {...props} />;
}

function FieldDescriptionWrapper(
  props: React.ComponentProps<typeof Oui.FieldDescription>,
) {
  const context = React.useContext(Rac.TextContext);
  console.log("Text context (description):", JSON.stringify(context, null, 2));
  return <Oui.FieldDescription {...props} />;
}

function FieldErrorWrapper(props: React.ComponentProps<typeof Oui.FieldError>) {
  const context = React.useContext(Rac.FieldErrorContext);
  console.log("FieldError context:", JSON.stringify(context, null, 2));
  return <Oui.FieldError {...props} />;
}

export default function RouteComponent() {
  return (
    <div className="mx-auto max-w-md p-6">
      <TextFieldWrapper name="email" type="email" isRequired>
        <FormLabelWrapper>Email</FormLabelWrapper>
        <InputWrapper />
        <FieldDescriptionWrapper>
          Enter your email address.
        </FieldDescriptionWrapper>
        <FieldErrorWrapper />
      </TextFieldWrapper>
    </div>
  );
}
