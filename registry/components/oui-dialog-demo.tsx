import { Button } from "@/registry/components/ui/oui-button";
import { Dialog } from "@/registry/components/ui/oui-dialog";
import { Form } from "@/registry/components/ui/oui-form";
import { Heading } from "@/registry/components/ui/oui-heading";
import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { Modal, ModalOverlay } from "@/registry/components/ui/oui-modal";
import { TextField } from "@/registry/components/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Dialog</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <Form>
              <Heading slot="title">Sign up</Heading>
              <TextField autoFocus>
                <Label>First Name</Label>
                <Input />
              </TextField>
              <TextField>
                <Label>Last Name</Label>
                <Input />
              </TextField>
              <Button slot="close">Submit</Button>
            </Form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
