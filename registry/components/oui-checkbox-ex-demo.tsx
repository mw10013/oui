"use client";
import { CheckboxEx } from "@/registry/components/oui-checkbox-ex";

export default function Component() {
  return (
    <CheckboxEx
      name="terms-2"
      defaultSelected
      descriptionClassName="text-muted-foreground text-sm"
      description="By clicking this checkbox, you agree to the terms and conditions."
    >
      Accept terms and conditions
    </CheckboxEx>
  );
}
