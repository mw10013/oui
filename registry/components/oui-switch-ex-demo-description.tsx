"use client";
import { SwitchEx } from "@/registry/components/oui-switch-ex";

export default function Component() {
  return (
    <SwitchEx
      id="switch-demo-focus-mode"
      indicatorPosition="end"
      indicatorClassName="group-data-selected:bg-blue-500 dark:group-data-selected:bg-blue-600"
      containerClassName="shadow-xs rounded-lg border p-4 has-data-selected:border-blue-600"
      className="leading-snug"
      description="Focus is shared across devices, and turns off when you leave the app."
    >
      <div className="font-medium">Share across devices</div>
    </SwitchEx>
  );
}
