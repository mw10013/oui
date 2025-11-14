import { Badge } from "@/registry/default/ui/badge";
import * as Oui from "@/registry/default/ui/oui-index";
import { ArrowRightIcon } from "lucide-react";

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="rounded-full">
      <Oui.Link href="https://github.com/mw10013/cloudflare-react-router-saas">
        <span className="flex size-2 rounded-full bg-blue-500" title="New" />
        Example: Open-source saas template using Oui <ArrowRightIcon />
      </Oui.Link>
    </Badge>
  );
}
