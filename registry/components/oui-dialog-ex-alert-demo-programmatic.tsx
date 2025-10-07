import {
  DialogExAlertProvider,
  useDialogExAlert,
} from "@/registry/components/oui-dialog-ex-alert";
import { Button } from "@/registry/components/ui/oui-button";

export default function Component() {
  return (
    <DialogExAlertProvider>
      <ProgrammaticAlert />
    </DialogExAlertProvider>
  );
}

function ProgrammaticAlert() {
  const alertDialog = useDialogExAlert();

  // Use .then() to handle promise since onPress expects void return
  const handleConfirm = () => {
    void alertDialog
      .show({
        title: "Are you sure?",
        children: "This action cannot be undone.",
        confirmLabel: "Delete",
      })
      .then((confirmed) => {
        if (confirmed) {
          console.log("Confirmed!");
        } else {
          console.log("Cancelled!");
        }
      });
  };
  return (
    <Button variant="outline" onPress={handleConfirm}>
      Programmatic Alert
    </Button>
  );
}
