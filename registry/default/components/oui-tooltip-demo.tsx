"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Tooltip } from "@/registry/default/ui/oui-tooltip";
import { TooltipTrigger } from "react-aria-components";

export default function Component() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Tooltip</Button>
      <Tooltip>This is a tooltip</Tooltip>
    </TooltipTrigger>
  );
}
