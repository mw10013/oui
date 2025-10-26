"use client";

import { TooltipEx } from "@/registry/default/components/oui-tooltip-ex";
import { Button } from "@/registry/default/ui/oui-button";

export default function Component() {
  return (
    <TooltipEx triggerElement={<Button variant="outline">Tooltip Ex</Button>}>
      This is a tooltip
    </TooltipEx>
  );
}
