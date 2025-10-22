"use client";

import { DialogEx } from "@/registry/default/components/oui-dialog-ex";
import { Button } from "@/registry/default/ui/oui-button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";

export default function Component() {
  return (
    <DialogEx
      triggerElement={<Button variant="outline">DialogEx Alert</Button>}
      role="alertdialog"
    >
      <DialogHeader>
        <Heading variant="alert" slot="title">
          Session Expired
        </Heading>
        <DialogDescription>
          Your session has expired due to inactivity. Please log in again to
          continue using the application.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button slot="close" autoFocus>
          OK
        </Button>
      </DialogFooter>
    </DialogEx>
  );
}
