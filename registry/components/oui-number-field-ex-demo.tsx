import { NumberFieldEx } from "@/registry/components/oui-number-field-ex";
import { Button } from "@/registry/components/ui/oui-button";
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
      <NumberFieldEx
        name="age"
        placeholder="age"
        label="Age"
        description="This is your age."
      />
      <NumberFieldEx
        name="quantity"
        label="Quantity"
        description="Your best quantity."
      />
      <Button type="submit">Submit</Button>
    </Rac.Form>
  );
}
