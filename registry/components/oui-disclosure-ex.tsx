import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@/registry/components/ui/oui-disclosure";
import { Heading } from "@/registry/components/ui/oui-heading";
import { Label } from "@/registry/components/ui/oui-label";
import { Link } from "@/registry/components/ui/oui-link";
import { Text } from "@/registry/components/ui/oui-text";
import * as Rac from "react-aria-components";

export interface DisclosureExProps
  extends Omit<Rac.DisclosureProps, "children"> {
  title?: string;
  children?: Rac.DisclosurePanelProps["children"];
}

export function DisclosureEx({ title, children, ...props }: DisclosureExProps) {
  return (
    <Disclosure {...props}>
      <Heading variant="disclosure">
        <DisclosureButton>{title}</DisclosureButton>
      </Heading>
      <DisclosurePanel>{children}</DisclosurePanel>
    </Disclosure>
  );
}

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>DisclosureEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/Disclosure.html"
          underline="always"
        >
          Disclosure
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=disclosure-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
