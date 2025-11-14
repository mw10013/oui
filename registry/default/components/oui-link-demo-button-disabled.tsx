"use client";

import { buttonClassName } from "@/registry/default/ui/oui-button";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.Link isDisabled href="#" className={buttonClassName({})}>
      Button Link
    </Rac.Link>
  );
}
