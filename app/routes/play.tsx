import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/components/ui/item";
import { Button } from "@/registry/components/ui/oui-button";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { Popover } from "@/registry/components/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/components/ui/oui-select";
import { ExternalLink, Home, Shield } from "lucide-react";
import * as Rac from "react-aria-components";

export default function RouteComponent() {
  return (
    <>
      <title>Playground - Oui</title>
      <meta
        name="description"
        content="Interactive playground for testing Oui components - react aria components that run side-by-side with shadcn components."
      />
      <meta property="og:title" content="Playground - Oui" />
      <meta
        property="og:description"
        content="Interactive playground for testing Oui components - react aria components that run side-by-side with shadcn components."
      />
      <div className="mx-auto flex max-w-md flex-col gap-6 p-6">
        {/* Variants */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Variants</h2>
          <div className="space-y-4">
            <Item>
              <ItemContent>
                <ItemTitle>Default Variant</ItemTitle>
                <ItemDescription>
                  Standard styling with subtle background and borders.
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Outline Variant</ItemTitle>
                <ItemDescription>
                  Outlined style with clear borders and transparent background.
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="muted">
              <ItemContent>
                <ItemTitle>Muted Variant</ItemTitle>
                <ItemDescription>
                  Subdued appearance with muted colors for secondary content.
                </ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </section>

        {/* Size */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Size</h2>
          <div className="space-y-4">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Basic Item</ItemTitle>
                <ItemDescription>
                  A simple item with title and description.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button>Action</Button>
              </ItemActions>
            </Item>
            <Item variant="outline" size="sm">
              <ItemContent>
                <ItemTitle>Small Item</ItemTitle>
                <ItemDescription>
                  A simple item with title and description.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button>Action</Button>
              </ItemActions>
            </Item>
          </div>
        </section>

        {/* Icon */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Icon</h2>
          <div className="space-y-4">
            <Item>
              <ItemMedia variant="icon">
                <Shield className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Security Alert</ItemTitle>
                <ItemDescription>
                  New login detected from unknown device.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline">Review</Button>
              </ItemActions>
            </Item>
          </div>
        </section>

        {/* Avatar */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Avatar</h2>
          <div className="space-y-4">
            <Item>
              <ItemMedia variant="icon">
                <Avatar className="size-8">
                  <AvatarImage src="https://github.com/evilrabbit.png" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Evil Rabbit</ItemTitle>
                <ItemDescription>Last seen 5 months ago</ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemMedia variant="icon">
                <Avatar className="size-8">
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>No Team Members</ItemTitle>
                <ItemDescription>
                  Invite your team to collaborate on this project.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button>Invite</Button>
              </ItemActions>
            </Item>
          </div>
        </section>

        {/* Image */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Image</h2>
          <div className="space-y-4">
            <Item>
              <ItemMedia variant="image">
                <img
                  src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2FMidnight%20City%20Lights&w=64&q=75"
                  alt="Midnight City Lights"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Midnight City Lights - Electric Nights</ItemTitle>
                <ItemDescription>Neon Dreams</ItemDescription>
              </ItemContent>
              <ItemActions>
                <span className="text-sm text-muted-foreground">3:45</span>
              </ItemActions>
            </Item>
            <Item>
              <ItemMedia variant="image">
                <img
                  src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2FCoffee%20Shop%20Conversations&w=64&q=75"
                  alt="Coffee Shop Conversations"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Coffee Shop Conversations - Urban Stories</ItemTitle>
                <ItemDescription>The Morning Brew</ItemDescription>
              </ItemContent>
              <ItemActions>
                <span className="text-sm text-muted-foreground">4:05</span>
              </ItemActions>
            </Item>
            <Item>
              <ItemMedia variant="image">
                <img
                  src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2FDigital%20Rain&w=64&q=75"
                  alt="Digital Rain"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Digital Rain - Binary Beats</ItemTitle>
                <ItemDescription>Cyber Symphony</ItemDescription>
              </ItemContent>
              <ItemActions>
                <span className="text-sm text-muted-foreground">3:30</span>
              </ItemActions>
            </Item>
          </div>
        </section>

        {/* Group */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Group</h2>
          <ItemGroup>
            <Item>
              <ItemMedia variant="icon">
                <Avatar className="size-8">
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>shadcn</ItemTitle>
                <ItemDescription>shadcn@vercel.com</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia variant="icon">
                <Avatar className="size-8">
                  <AvatarFallback>MM</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>maxleiter</ItemTitle>
                <ItemDescription>maxleiter@vercel.com</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia variant="icon">
                <Avatar className="size-8">
                  <AvatarFallback>EE</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>evilrabbit</ItemTitle>
                <ItemDescription>evilrabbit@vercel.com</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </section>

        {/* Header */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Header</h2>
          <div className="space-y-4">
            <Item variant="outline">
              <ItemHeader>
                <img
                  src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1650804068570-7fb2e3dbf888%3Fq%3D80%26w%3D640%26auto%3Dformat%26fit%3Dcrop&w=256&q=75"
                  alt="v0-1.5-sm"
                  className="h-16 w-16 rounded"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle>v0-1.5-sm</ItemTitle>
                <ItemDescription>
                  Everyday tasks and UI generation.
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="outline">
              <ItemHeader>
                <img
                  src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1610280777472-54133d004c8c%3Fq%3D80%26w%3D640%26auto%3Dformat%26fit%3Dcrop&w=256&q=75"
                  alt="v0-1.5-lg"
                  className="h-16 w-16 rounded"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle>v0-1.5-lg</ItemTitle>
                <ItemDescription>
                  Advanced thinking or reasoning.
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="outline">
              <ItemHeader>
                <img
                  src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1602146057681-08560aee8cde%3Fq%3D80%26w%3D640%26auto%3Dformat%26fit%3Dcrop&w=256&q=75"
                  alt="v0-2.0-mini"
                  className="h-16 w-16 rounded"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle>v0-2.0-mini</ItemTitle>
                <ItemDescription>
                  Open Source model for everyone.
                </ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </section>

        {/* Link */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Link</h2>
          <div className="space-y-4">
            <Item asChild>
              <a href="/dashboard">
                <ItemMedia variant="icon">
                  <Home className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Dashboard</ItemTitle>
                  <ItemDescription>
                    Overview of your account and activity.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ExternalLink className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ItemContent>
                  <ItemTitle>External resource</ItemTitle>
                  <ItemDescription>
                    Opens in a new tab with security attributes.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="outline">Visit</Button>
                </ItemActions>
              </a>
            </Item>
          </div>
        </section>

        {/* Dropdown */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Dropdown</h2>
          <Select placeholder="Select an option">
            <SelectButton>
              <SelectValue />
            </SelectButton>
            <Popover>
              <Rac.ListBox>
                <ListBoxItem>Option 1</ListBoxItem>
                <ListBoxItem>Option 2</ListBoxItem>
                <ListBoxItem>Option 3</ListBoxItem>
              </Rac.ListBox>
            </Popover>
          </Select>
        </section>
      </div>
    </>
  );
}
