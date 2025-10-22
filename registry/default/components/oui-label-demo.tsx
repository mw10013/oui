"use client";

import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.TextField className="group grid gap-2">
      <Label>Label</Label>
      <Input placeholder="Placeholder" />
    </Rac.TextField>
  );
}
