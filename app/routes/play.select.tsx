import OuiFieldSelectDemo from "@/registry/default/components/oui-select-demo";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

function FieldSelectDemo() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel>Department</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Customer Support</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>
          Select your department or area of work.
        </FieldDescription>
      </Field>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <FieldSelectDemo />
      <OuiFieldSelectDemo />
    </div>
  );
}
