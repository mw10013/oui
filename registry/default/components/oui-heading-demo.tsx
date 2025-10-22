"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Dialog } from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Heading</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <Heading slot="title">Heading</Heading>
            <p>This dialog demonstrates the Heading component.</p>
            <Button slot="close">Close</Button>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
