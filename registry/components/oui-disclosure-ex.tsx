import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@/registry/components/ui/oui-disclosure";
import { Heading } from "@/registry/components/ui/oui-heading";
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
  return <div className="p-4">DisclosureEx</div>;
}
