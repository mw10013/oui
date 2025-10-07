import { SwitchEx } from "@/registry/components/oui-switch-ex";

export default function Component() {
  return (
    <SwitchEx
      id="switch-demo-bluetooth"
      defaultSelected
      indicatorClassName="group-data-[selected]:bg-blue-500 dark:group-data-[selected]:bg-blue-600"
    >
      Bluetooth
    </SwitchEx>
  );
}
