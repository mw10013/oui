"use client";

import { ToggleButton } from "@/registry/default/ui/oui-toggle-button";
import { Bold, BookmarkIcon, Italic, StarIcon, Underline } from "lucide-react";

export default function Component() {
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
      <ToggleButton aria-label="Toggle underline" size="lg">
        <Underline />
      </ToggleButton>
      <ToggleButton aria-label="Toggle disabled" isDisabled>
        <BookmarkIcon className="h-4 w-4" />
      </ToggleButton>
      <ToggleButton aria-label="Toggle selected" isSelected>
        <StarIcon />
        Selected
      </ToggleButton>
    </div>
  );
}
