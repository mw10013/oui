"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import * as Oui from "@/registry/default/ui/oui-index";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";
import { Bold, Bookmark, Heart, Italic, Star, Underline } from "lucide-react";

function ShadcnOutline() {
  return (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function OuiOutline() {
  return (
    <Oui.ToggleButtonGroup selectionMode="multiple">
      <Oui.ToggleButton id="bold" variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton
        id="italic"
        variant="outline"
        aria-label="Toggle italic"
      >
        <Italic className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton
        id="strikethrough"
        variant="outline"
        aria-label="Toggle strikethrough"
      >
        <Underline className="h-4 w-4" />
      </Oui.ToggleButton>
    </Oui.ToggleButtonGroup>
  );
}

function ShadcnSingle() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function OuiSingle() {
  return (
    <Oui.ToggleButtonGroup selectionMode="single">
      <Oui.ToggleButton id="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton id="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton id="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </Oui.ToggleButton>
    </Oui.ToggleButtonGroup>
  );
}

function ShadcnSmall() {
  return (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function OuiSmall() {
  return (
    <Oui.ToggleButtonGroup selectionMode="single">
      <Oui.ToggleButton id="bold" size="sm" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton id="italic" size="sm" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton
        id="strikethrough"
        size="sm"
        aria-label="Toggle strikethrough"
      >
        <Underline className="h-4 w-4" />
      </Oui.ToggleButton>
    </Oui.ToggleButtonGroup>
  );
}

function ShadcnLarge() {
  return (
    <ToggleGroup type="multiple" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function OuiLarge() {
  return (
    <Oui.ToggleButtonGroup selectionMode="multiple">
      <Oui.ToggleButton id="bold" size="lg" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton id="italic" size="lg" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton
        id="strikethrough"
        size="lg"
        aria-label="Toggle strikethrough"
      >
        <Underline className="h-4 w-4" />
      </Oui.ToggleButton>
    </Oui.ToggleButtonGroup>
  );
}

function ShadcnDisabled() {
  return (
    <ToggleGroup type="multiple" disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function OuiDisabled() {
  return (
    <Oui.ToggleButtonGroup selectionMode="multiple" isDisabled>
      <Oui.ToggleButton id="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton id="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Oui.ToggleButton>
      <Oui.ToggleButton id="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </Oui.ToggleButton>
    </Oui.ToggleButtonGroup>
  );
}

function ShadcnSpacing() {
  return (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
      >
        <Star />
        Star
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
      >
        <Heart />
        Heart
      </ToggleGroupItem>
      <ToggleGroupItem
        value="bookmark"
        aria-label="Toggle bookmark"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <Bookmark />
        Bookmark
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function OuiSpacing() {
  return (
    <Oui.ToggleButtonGroup selectionMode="multiple" spacing={2}>
      <Oui.ToggleButton
        id="star"
        variant="outline"
        size="sm"
        aria-label="Toggle star"
        className="data-selected:bg-transparent data-selected:*:[svg]:fill-yellow-500 data-selected:*:[svg]:stroke-yellow-500"
      >
        <Star />
        Star
      </Oui.ToggleButton>
      <Oui.ToggleButton
        id="heart"
        variant="outline"
        size="sm"
        aria-label="Toggle heart"
        className="data-selected:bg-transparent data-selected:*:[svg]:fill-red-500 data-selected:*:[svg]:stroke-red-500"
      >
        <Heart />
        Heart
      </Oui.ToggleButton>
      <Oui.ToggleButton
        id="bookmark"
        variant="outline"
        size="sm"
        aria-label="Toggle bookmark"
        className="data-selected:bg-transparent data-selected:*:[svg]:fill-blue-500 data-selected:*:[svg]:stroke-blue-500"
      >
        <Bookmark />
        Bookmark
      </Oui.ToggleButton>
    </Oui.ToggleButtonGroup>
  );
}

export default function SideBySideToggleButtonGroupPage() {
  return (
    <SideBySidePage
      title="Toggle Button Group"
      sourceHref="https://ui.shadcn.com/docs/components/toggle-group"
    >
      <SideBySideSection
        title="Outline"
        shadcn={<ShadcnOutline />}
        oui={<OuiOutline />}
      />
      <SideBySideSection
        title="Single"
        shadcn={<ShadcnSingle />}
        oui={<OuiSingle />}
      />
      <SideBySideSection
        title="Small"
        shadcn={<ShadcnSmall />}
        oui={<OuiSmall />}
      />
      <SideBySideSection
        title="Large"
        shadcn={<ShadcnLarge />}
        oui={<OuiLarge />}
      />
      <SideBySideSection
        title="Disabled"
        shadcn={<ShadcnDisabled />}
        oui={<OuiDisabled />}
      />
      <SideBySideSection
        title="Spacing"
        shadcn={<ShadcnSpacing />}
        oui={<OuiSpacing />}
      />
    </SideBySidePage>
  );
}
