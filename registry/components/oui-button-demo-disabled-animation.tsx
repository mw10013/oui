import { Button } from "@/registry/components/ui/oui-button";
import { Loader2 } from "lucide-react";

export default function Component() {
  return (
    <Button isDisabled variant="outline">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  );
}
