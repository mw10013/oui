"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import { ToggleButton } from "@/registry/default/ui/oui-toggle-button";
import { Toggle } from "@/registry/default/ui/toggle";
import { Bold, BookmarkIcon, Italic } from "lucide-react";

function ToggleDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
        <BookmarkIcon />
        Bookmark
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <Italic />
      </Toggle>
      <Toggle aria-label="Toggle bold" size="sm">
        <Bold />
      </Toggle>
    </div>
  );
}

function OuiToggleButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <ToggleButton aria-label="Toggle bookmark" size="sm" variant="outline">
        <BookmarkIcon />
        Bookmark
      </ToggleButton>
      <ToggleButton aria-label="Toggle italic" variant="outline">
        <Italic />
      </ToggleButton>
      <ToggleButton aria-label="Toggle bold" size="sm">
        <Bold />
      </ToggleButton>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Toggle Button"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.toggle-button.tsx"
    >
      <SideBySideSection
        title="Basic"
        shadcn={<ToggleDemo />}
        oui={<OuiToggleButtonDemo />}
      />
    </SideBySidePage>
  );
}
