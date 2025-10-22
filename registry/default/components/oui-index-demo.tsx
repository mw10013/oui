"use client";

import * as Oui from "@/registry/default/ui/oui-index";

export default function Component() {
  return (
    <div className="grid gap-2">
      <Oui.Label>Index</Oui.Label>
      <Oui.Text slot="description" elementType="div">
        All ui and ex (extension or reusable wrapper) components. Only core
        components. No demos.
        <pre className="mt-2 rounded bg-muted p-2 text-sm">
          {`import * as Oui from '@/components/ui/oui-index'
<Oui.Button>Oui Index</Oui.Button>`}
        </pre>
      </Oui.Text>
    </div>
  );
}
