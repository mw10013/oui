import { useState } from "react";
import { DialogExAlert } from "@/registry/components/oui-dialog-ex-alert";
import { Button } from "@/registry/components/ui/oui-button";

export default function Component() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        onPress={() => {
          setOpen(true);
        }}
      >
        DialogExAlert Ack
      </Button>
      <DialogExAlert
        isOpen={isOpen}
        onOpenChange={setOpen}
        type="acknowledge"
        title="Session Expired"
      >
        Your session has expired. Please log in again to continue.
      </DialogExAlert>
    </>
  );
}
