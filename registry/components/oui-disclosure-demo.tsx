import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@/registry/components/ui/oui-disclosure";
import { Heading } from "@/registry/components/ui/oui-heading";

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
