import { DialogEx } from "@/registry/components/oui-dialog-ex";
import { TextFieldEx } from "@/registry/components/oui-text-field-ex";
import { Button } from "@/registry/components/ui/oui-button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/components/ui/oui-dialog";
import { Heading } from "@/registry/components/ui/oui-heading";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <DialogEx
      triggerElement={<Button variant="outline">DialogEx</Button>}
      modalClassName="sm:max-w-[425px]"
    >
      <Rac.Form>
        <DialogHeader>
          <Heading slot="title">Edit profile</Heading>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TextFieldEx
            name="name"
            label="Name"
            defaultValue="Pedro Duarte"
            autoFocus
          />
          <TextFieldEx
            name="username"
            label="Username"
            defaultValue="@peduarte"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" slot="close">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Save changes
          </Button>
        </DialogFooter>
      </Rac.Form>
    </DialogEx>
  );
}
