"use client";

import { DisclosureEx } from "@/registry/components/oui-disclosure-ex";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DisclosureGroup className="w-full">
      <DisclosureEx id="item-1" title="Is it accessible?">
        Yes. It adheres to the WAI-ARIA design pattern.
      </DisclosureEx>
      <DisclosureEx id="item-2" title="Is it styled?">
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </DisclosureEx>
      <DisclosureEx id="item-3" title="Is it animated?">
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </DisclosureEx>
    </Rac.DisclosureGroup>
  );
}
