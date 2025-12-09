"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosureHeading,
  DisclosurePanel,
} from "@/registry/default/ui/oui-disclosure";

export default function Component() {
  return (
    <Disclosure>
      <DisclosureHeading>
        <DisclosureButton>System Requirements</DisclosureButton>
      </DisclosureHeading>
      <DisclosurePanel>Details about system requirements here.</DisclosurePanel>
    </Disclosure>
  );
}
