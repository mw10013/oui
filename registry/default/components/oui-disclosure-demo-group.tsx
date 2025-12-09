"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosureHeading,
  DisclosurePanel,
} from "@/registry/default/ui/oui-disclosure";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DisclosureGroup className="w-full">
      <Disclosure id="item-1">
        <DisclosureHeading>
          <DisclosureButton>Is it accessible?</DisclosureButton>
        </DisclosureHeading>
        <DisclosurePanel>
          Yes. It adheres to the WAI-ARIA design pattern.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="item-2">
        <DisclosureHeading>
          <DisclosureButton>Is it styled?</DisclosureButton>
        </DisclosureHeading>
        <DisclosurePanel>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="item-3">
        <DisclosureHeading>
          <DisclosureButton>Is it animated?</DisclosureButton>
        </DisclosureHeading>
        <DisclosurePanel>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </DisclosurePanel>
      </Disclosure>
    </Rac.DisclosureGroup>
  );
}
