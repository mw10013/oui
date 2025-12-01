"use client";

import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";
import * as Rac from "react-aria-components";
import { Modal, ModalOverlay } from "../ui/oui-modal";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Dialog Scrollable Content</Button>
      <ModalOverlay isDismissable>
        <Modal className="sm:max-w-[425px]">
          <Dialog>
            <DialogHeader>
              <Heading slot="title">Scrollable Content</Heading>
              <DialogDescription>
                This is a dialog with scrollable content.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 py-4 text-sm">
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
          </Dialog>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
