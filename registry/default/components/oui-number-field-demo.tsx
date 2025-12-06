"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { ButtonGroup } from "@/registry/default/ui/oui-button-group";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
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
          <ButtonGroup>
            <Button slot="decrement" variant="outline">
              <Minus />
            </Button>
            <Input placeholder="age" className="text-center tabular-nums" />
            <Button slot="increment" variant="outline">
              <Plus />
            </Button>
          </ButtonGroup>
          <FieldDescription>This is your age.</FieldDescription>
          <FieldError />
        </NumberField>
        <NumberField name="quantity">
          <FieldLabel>Quantity</FieldLabel>
          <ButtonGroup>
            <Button slot="decrement" variant="outline">
              <Minus />
            </Button>
            <Input placeholder="quantity" className="text-center tabular-nums" />
            <Button slot="increment" variant="outline">
              <Plus />
            </Button>
          </ButtonGroup>
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
