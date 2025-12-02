import * as Oui from "@/registry/default/ui/oui-index";
import { ArrowRightIcon } from "lucide-react";
import * as Rac from "react-aria-components";

export function Announcement() {
  return (
    <Rac.Link
      href="https://github.com/mw10013/cloudflare-react-router-saas"
      target="_blank"
      rel="noopener noreferrer"
      className={Oui.badgeExClassName({ variant: "secondary" })}
    >
      <span className="flex size-2 rounded-full bg-blue-500" title="New" />
      Example: Open-source saas template using Oui <ArrowRightIcon />
    </Rac.Link>
  );
}
