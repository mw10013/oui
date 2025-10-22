"use client";

import { buttonClassName } from "@/registry/default/ui/oui-button";
import { Link } from "@/registry/default/ui/oui-link";

export default function Component() {
  return (
    <Link href="#" className={buttonClassName({})}>
      Button Link
    </Link>
  );
}
