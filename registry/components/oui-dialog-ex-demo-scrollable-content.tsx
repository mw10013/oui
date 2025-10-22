"use client";
import { DialogEx } from "@/registry/components/oui-dialog-ex";
import { Button } from "@/registry/components/ui/oui-button";
import {
  DialogDescription,
  DialogHeader,
} from "@/registry/components/ui/oui-dialog";
import { Heading } from "@/registry/components/ui/oui-heading";

export default function Component() {
  return (
    <DialogEx
      triggerElement={<Button variant="outline">DialogEx Scrollable Content</Button>}
      modalClassName="sm:max-w-[425px]"
    >
      <DialogHeader>
        <Heading slot="title">Scrollable Content</Heading>
        <DialogDescription>
          This is a dialog with scrollable content.
        </DialogDescription>
      </DialogHeader>
      <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 py-4 text-sm">
        <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
        {Array.from({ length: 10 }).map((_, index) => (
          <p key={index} className="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
      </div>
    </DialogEx>
  );
}
