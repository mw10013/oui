"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@/registry/default/ui/oui-disclosure";
import { Heading } from "@/registry/default/ui/oui-heading";

export default function Component() {
  return (
    <Disclosure>
      <Heading variant="disclosure">
        <DisclosureButton>System Requirements</DisclosureButton>
      </Heading>
      <DisclosurePanel>Details about system requirements here.</DisclosurePanel>
    </Disclosure>
  );
}
