import * as React from "react";
import { PageHeader } from "@/components/page-header";
import * as Oui from "@/registry/default/ui/oui-index";
import { Code } from "lucide-react";

export function SideBySidePage({
  title,
  sourceHref,
  children,
}: {
  title: string;
  sourceHref: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} className="mb-10" />
      <div className="mx-auto max-w-7xl space-y-8 p-6">
        <Oui.Link
          href={sourceHref}
          rel="noreferrer"
          className="inline-flex items-center text-sm"
          underline="hover"
        >
          <Code className="me-2 size-4" />
          Source
        </Oui.Link>

        <div className="hidden md:mb-4 md:grid md:grid-cols-2 md:gap-8">
          <div className="text-center text-sm font-medium text-muted-foreground">
            Shadcn
          </div>
          <div className="text-center text-sm font-medium text-muted-foreground">
            Oui
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
