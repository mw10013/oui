"use client";

import { Button } from "@/registry/components/ui/oui-button";
import { Dialog } from "@/registry/components/ui/oui-dialog";
import { Heading } from "@/registry/components/ui/oui-heading";
import { Modal, ModalOverlay } from "@/registry/components/ui/oui-modal";
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
