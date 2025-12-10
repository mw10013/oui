"use client";

import { ToggleButton } from "@/registry/default/ui/oui-toggle-button";
import { ToggleButtonGroup } from "@/registry/default/ui/oui-toggle-button-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function Component() {
  return (
    <ToggleButtonGroup selectionMode="multiple" variant="outline">
      <ToggleButton id="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleButton>
      <ToggleButton id="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleButton>
      <ToggleButton id="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
