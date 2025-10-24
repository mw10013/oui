import { ToggleButton } from "@/registry/default/ui/oui-toggle-button";
import { Toggle } from "@/registry/default/ui/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";
import {
  Bold,
  BookmarkIcon,
  HeartIcon,
  Italic,
  StarIcon,
  Underline,
} from "lucide-react";

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
          <Toggle aria-label="Toggle underline" size="lg">
            <Underline />
          </Toggle>
          <Toggle aria-label="Toggle disabled" disabled>
            <BookmarkIcon className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Toggle Group - Single</h2>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Toggle Group - Multiple</h2>
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">
          Toggle Group - Small with Spacing
        </h2>
        <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
          <ToggleGroupItem
            value="star"
            aria-label="Toggle star"
            className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
          >
            <StarIcon />
            Star
          </ToggleGroupItem>
          <ToggleGroupItem
            value="heart"
            aria-label="Toggle heart"
            className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
          >
            <HeartIcon />
            Heart
          </ToggleGroupItem>
          <ToggleGroupItem
            value="bookmark"
            aria-label="Toggle bookmark"
            className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
          >
            <BookmarkIcon />
            Bookmark
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Toggle Group - Large Disabled</h2>
        <ToggleGroup type="multiple" size="lg" disabled>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
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
      </div>
    </div>
  );
}
