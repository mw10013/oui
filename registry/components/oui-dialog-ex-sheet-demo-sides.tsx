"use client";
import { DialogExSheet } from "@/registry/components/oui-dialog-ex-sheet";
import { Button } from "@/registry/components/ui/oui-button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/components/ui/oui-dialog";
import { Heading } from "@/registry/components/ui/oui-heading";
import { Label } from "./ui/oui-index";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>DialogExSheet</Label>
      <div className="flex flex-wrap gap-2">
        {SHEET_SIDES.map((side) => (
          <DialogExSheet
            key={side}
            triggerElement={
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            }
            side={side}
          >
            <DialogHeader>
              <Heading slot="title">Edit profile</Heading>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-6 max-h-[calc(100vh-16rem)] overflow-y-auto px-6 py-4 text-sm">
              <h4 className="mb-4 text-lg leading-none font-medium">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <DialogFooter>
              <Button type="submit" slot="close">
                Save changes
              </Button>
              <Button variant="outline" slot="close">
                Cancel
              </Button>
            </DialogFooter>
          </DialogExSheet>
        ))}
      </div>
    </div>
  );
}
