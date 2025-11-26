"use client";

import {
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { TextField } from "@/registry/default/ui/oui-text-field";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <TextField>
            <FieldLabel>Street Address</FieldLabel>
            <Input placeholder="123 Main St" />
          </TextField>
          <div className="grid grid-cols-2 gap-4">
            <TextField>
              <FieldLabel>City</FieldLabel>
              <Input placeholder="New York" />
            </TextField>
            <TextField>
              <FieldLabel>Postal Code</FieldLabel>
              <Input placeholder="90502" />
            </TextField>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
