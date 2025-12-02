import { badgeExClassName } from "@/registry/default/components/oui-badge-ex";
import { ArrowRightIcon } from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.Link
      href="https://github.com/mw10013/cloudflare-react-router-saas"
      target="_blank"
      rel="noopener noreferrer"
      className={badgeExClassName({ variant: "secondary" })}
    >
      <span className="flex size-2 rounded-full bg-blue-500" title="New" />
      Example: Open-source saas template using Oui <ArrowRightIcon />
    </Rac.Link>
  );
}
