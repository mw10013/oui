"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { OverlayArrow, Tooltip } from "@/registry/default/ui/oui-tooltip";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.TooltipTrigger>
      <Button variant="outline">Tooltip Ex</Button>
      <Tooltip>
        <OverlayArrow />
        This is a tooltip
      </Tooltip>
    </Rac.TooltipTrigger>
  );
}
