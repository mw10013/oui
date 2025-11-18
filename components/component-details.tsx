import type { JSX } from "react";
import type { RegistryItem } from "shadcn/schema";
import { useEffect, useState } from "react";
import ComponentCli from "@/components/cli-commands";
import CodeBlock, { highlight } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import CopyRegistry from "@/components/copy-registry";
import OpenInV0 from "@/components/open-in-v0";
import { DialogEx } from "@/registry/default/components/oui-dialog-ex";
import { TooltipEx } from "@/registry/default/components/oui-tooltip-ex";
import { Button } from "@/registry/default/ui/oui-button";
import {
  DialogDescription,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";
import { CodeIcon } from "lucide-react";

export function ComponentDetails({
  component,
}: {
  component: RegistryItem;
}) {
  const [code, setCode] = useState<string | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null,
  );

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("");
      setHighlightedCode(null);
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${component.name}.json`);
        if (!response.ok) {
          handleEmptyCode();
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
          handleEmptyCode();
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        const codeContent = convertRegistryPaths(data.files[0].content) || "";
        setCode(codeContent);

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, "tsx");
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Failed to load code:", error);
        handleEmptyCode();
      }
    };

    void loadCode();
  }, [component.name]);

  return (
    <div className="absolute top-2 right-2 flex gap-1 peer-data-comp-loading:hidden">
      <CopyRegistry
        url={`https://oui.mw10013.workers.dev/r/${component.name}.json`}
      />
      {component.meta?.canOpenInV0 && (
        <OpenInV0
          componentSource={`https://oui.mw10013.workers.dev/r/${component.name}.json`}
        />
      )}
      <DialogEx
        triggerElement={
          <TooltipEx
            delay={0}
            triggerElement={
              <span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground/80 transition-none data-hovered:bg-transparent data-hovered:text-foreground lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
                >
                  <CodeIcon size={16} aria-hidden={true} />
                </Button>
              </span>
            }
          >
            View code
          </TooltipEx>
        }
        modalClassName="sm:max-w-[calc(100%-2rem)]"
      >
        <DialogHeader>
          <Heading slot="title" className="text-left">
            Installation
          </Heading>
          <DialogDescription className="sr-only">
            Use the CLI to add components to your project
          </DialogDescription>
        </DialogHeader>
        <div className="min-w-0 space-y-5">
          <ComponentCli name={component.name} />
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-tight">Code</p>
            <div className="relative">
              {code === "" ? (
                <p className="text-sm text-muted-foreground">
                  No code available. If you think this is an error, please{" "}
                  <a
                    href="https://github.com/mw10013/oui/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline hover:no-underline"
                  >
                    open an issue
                  </a>
                  .
                </p>
              ) : (
                <>
                  <CodeBlock
                    code={code}
                    lang="tsx"
                    preHighlighted={highlightedCode}
                  />
                  <CopyButton componentSource={code} />
                </>
              )}
            </div>
          </div>
        </div>
      </DialogEx>
    </div>
  );
}

// const convertRegistryPaths = (content: string): string => {
//   return content.replace(/@\/registry\//g, "@/");
// };

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/components/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib");
};
