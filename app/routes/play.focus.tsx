import { ToggleButton } from "@/registry/default/ui/oui-toggle-button";
import { Toggle } from "@/registry/default/ui/toggle";
import { Bold, BookmarkIcon, Italic } from "lucide-react";

export default function RouteComponent() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 p-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Toggle</h2>
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
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Oui Toggle Button</h2>
        <div className="flex flex-wrap gap-4">
          <ToggleButton
            aria-label="Toggle bookmark"
            size="sm"
            variant="outline"
          >
            <BookmarkIcon />
            Bookmark
          </ToggleButton>
          <ToggleButton
            aria-label="Toggle bookmark"
            size="sm"
            variant="outline"
            className="data-focus-visible:border-transparent data-focus-visible:ring-offset-4 data-focus-visible:ring-offset-background"
          >
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
      </div>
    </div>
  );
}

// export const focusVisibleStyles = tw`outline-none data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50`;
