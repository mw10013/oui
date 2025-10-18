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
        DialogExAlert Confirm
      </Button>
      <DialogExAlert
        isOpen={isOpen}
        onOpenChange={setOpen}
        title="Are you absolutely sure?"
      >
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogExAlert>
    </>
  );
}
