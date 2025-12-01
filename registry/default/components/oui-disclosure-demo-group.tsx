"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@/registry/default/ui/oui-disclosure";
import { Heading } from "@/registry/default/ui/oui-heading";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DisclosureGroup className="w-full">
      <Disclosure id="item-1">
        <Heading variant="disclosure">
          <DisclosureButton>Is it accessible?</DisclosureButton>
        </Heading>
        <DisclosurePanel>
          Yes. It adheres to the WAI-ARIA design pattern.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="item-2">
        <Heading variant="disclosure">
          <DisclosureButton>Is it styled?</DisclosureButton>
        </Heading>
        <DisclosurePanel>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="item-3">
        <Heading variant="disclosure">
          <DisclosureButton>Is it animated?</DisclosureButton>
        </Heading>
        <DisclosurePanel>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </DisclosurePanel>
      </Disclosure>
    </Rac.DisclosureGroup>
  );
}
