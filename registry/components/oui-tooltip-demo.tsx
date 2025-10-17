import { Button } from "@/registry/components/ui/oui-button";
import { OverlayArrow, Tooltip } from "@/registry/components/ui/oui-tooltip";
import { TooltipTrigger } from "react-aria-components";

export default function Component() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Tooltip</Button>
      <Tooltip>
        <OverlayArrow />
        This is a tooltip
      </Tooltip>
    </TooltipTrigger>
  );
}
