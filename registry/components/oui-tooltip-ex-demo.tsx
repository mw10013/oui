import { TooltipEx } from "@/registry/components/oui-tooltip-ex";
import { Button } from "@/registry/components/ui/oui-button";

export default function Component() {
  return (
    <TooltipEx triggerElement={<Button variant="outline">TooltipEx</Button>}>
      This is a tooltip
    </TooltipEx>
  );
}
