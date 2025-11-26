import OuiFieldDemoFieldset from "@/registry/default/components/oui-field-demo-fieldset";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

function FieldDemoFieldset() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <FieldDemoFieldset />
      <OuiFieldDemoFieldset />
    </div>
  );
}
