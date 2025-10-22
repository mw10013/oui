"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Group } from "@/registry/default/ui/oui-group";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { ChevronDown } from "lucide-react";

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>Group</Label>
      <Group>
        <Input variant="ghost" placeholder="Search..." />
        <Button variant="ghost" size="icon">
          <ChevronDown className="size-4 shrink-0 opacity-50" />
        </Button>
      </Group>
    </div>
  );
}
