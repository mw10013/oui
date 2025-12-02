"use client";

import { modalExSheetClassName } from "@/registry/default/components/oui-modal-ex-sheet";
import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";
import { Label } from "@/registry/default/ui/oui-label";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";
import * as Rac from "react-aria-components";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>Modal Ex Sheet</Label>
      <div className="flex flex-wrap gap-2">
        {SHEET_SIDES.map((side) => (
          <Rac.DialogTrigger key={side}>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
            <ModalOverlay isDismissable>
              <Modal className={modalExSheetClassName({ side })}>
                <Dialog>
                  <DialogHeader>
                    <Heading slot="title">Edit profile</Heading>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="-mx-6 max-h-[calc(100vh-16rem)] overflow-y-auto px-6 py-4 text-sm">
                    <h4 className="mb-4 text-lg leading-none font-medium">
                      Lorem Ipsum
                    </h4>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <p key={index} className="mb-4 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
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
                </Dialog>
              </Modal>
            </ModalOverlay>
          </Rac.DialogTrigger>
        ))}
      </div>
    </div>
  );
}
