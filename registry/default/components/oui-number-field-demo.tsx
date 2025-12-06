"use client";

import { Button } from "@/registry/default/ui/oui-button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/oui-field";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/oui-input-group";
import { NumberField } from "@/registry/default/ui/oui-number-field";
import { Minus, Plus } from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.Form
      method="post"
      validationBehavior="aria"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FieldGroup>
        <NumberField name="age">
          <FieldLabel>Age</FieldLabel>
          <InputGroup>
            <InputGroupButton
              slot="decrement"
              size="icon-sm"
              variant="ghost"
              className="h-full rounded-r-none"
            >
              <Minus />
            </InputGroupButton>
            <InputGroupInput
              variant="ghost"
              placeholder="age"
              className="text-center tabular-nums"
            />
            <InputGroupButton
              slot="increment"
              size="icon-sm"
              variant="ghost"
              className="h-full rounded-l-none"
            >
              <Plus />
            </InputGroupButton>
          </InputGroup>
          <FieldDescription>This is your age.</FieldDescription>
          <FieldError />
        </NumberField>
        <NumberField name="quantity">
          <FieldLabel>Quantity</FieldLabel>
          <InputGroup>
            <InputGroupButton
              slot="decrement"
              size="icon-sm"
              variant="ghost"
              className="h-full rounded-r-none"
            >
              <Minus />
            </InputGroupButton>
            <InputGroupInput
              variant="ghost"
              className="text-center tabular-nums"
            />
            <InputGroupButton
              slot="increment"
              size="icon-sm"
              variant="ghost"
              className="h-full rounded-l-none"
            >
              <Plus />
            </InputGroupButton>
          </InputGroup>
          <FieldDescription>Your best quantity.</FieldDescription>
          <FieldError />
        </NumberField>
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </Rac.Form>
  );
}
