import { Label } from "@/registry/components/ui/oui-label";
import { Text } from "@/registry/components/ui/oui-text";

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>Index</Label>
      <Text slot="description">
        Adds all oui ui and ex (extension or reusable wrapper) components.
        <pre className="mt-2 rounded bg-muted p-2 text-sm">
          {`import * as Oui from '@/registry/components/ui/oui-index'
<Oui.Button>Oui Index</Oui.Button>`}
        </pre>
      </Text>
    </div>
  );
}
