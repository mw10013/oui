"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { FieldError } from "@/registry/default/ui/oui-field";
import { Group } from "@/registry/default/ui/oui-group";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { NumberField } from "@/registry/default/ui/oui-number-field";
import { Text } from "@/registry/default/ui/oui-text";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.Form
      method="post"
      validationBehavior="aria"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="grid w-full max-w-sm gap-6"
    >
      <NumberField name="age">
        <Label>Age</Label>
        <Group>
          <Input variant="ghost" placeholder="age" className="tabular-nums" />
          <div className="flex h-[calc(100%+2px)] flex-col">
            <Rac.Button
              slot="increment"
              className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
            </Rac.Button>
            <Rac.Button
              slot="decrement"
              className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
            </Rac.Button>
          </div>
        </Group>
        <Text slot="description">This is your age.</Text>
        <FieldError />
      </NumberField>
      <NumberField name="quantity">
        <Label>Quantity</Label>
        <Group>
          <Input variant="ghost" className="tabular-nums" />
          <div className="flex h-[calc(100%+2px)] flex-col">
            <Rac.Button
              slot="increment"
              className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
            </Rac.Button>
            <Rac.Button
              slot="decrement"
              className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
            </Rac.Button>
          </div>
        </Group>
        <Text slot="description">Your best quantity.</Text>
        <FieldError />
      </NumberField>
      <Button type="submit">Submit</Button>
    </Rac.Form>
  );
}
