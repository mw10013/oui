"use client";

import { SwitchEx } from "@/registry/default/components/oui-switch-ex";

export default function Component() {
  return (
    <div className="flex flex-col gap-4">
      <SwitchEx
        name="marketing_emails"
        descriptionClassName="leading-snug"
        description="Receive emails about new products, features, and more."
        indicatorPosition="end"
        // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
        containerClassName="shadow-xs rounded-lg border p-4"
        className="leading-snug"
      >
        Marketing emails
      </SwitchEx>
      <SwitchEx
        name="security_emails"
        descriptionClassName="leading-snug"
        description="Receive emails about your account security."
        indicatorPosition="end"
        // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
        containerClassName="shadow-xs rounded-lg border p-4"
        className="leading-normal"
        isDisabled
      >
        Security emails
      </SwitchEx>
    </div>
  );
}
