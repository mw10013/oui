import type { JSX } from "react";
import type { RegistryItem } from "shadcn/schema";
import { useEffect, useState } from "react";
import ComponentCli from "@/components/cli-commands";
import CodeBlock, { highlight } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import OpenInV0 from "@/components/open-in-v0";
import { DialogEx } from "@/registry/components/oui-dialog-ex";
import { TooltipEx } from "@/registry/components/oui-tooltip-ex";
import { Button } from "@/registry/components/ui/oui-button";
import {
  DialogDescription,
  DialogHeader,
} from "@/registry/components/ui/oui-dialog";
import { Heading } from "@/registry/components/ui/oui-heading";
import { CodeIcon } from "lucide-react";

export default function ComponentDetails({
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
      <OpenInV0
        componentSource={`https://oui.mw10013.workers.dev/r/${component.name}.json`}
      />
      <DialogEx
        className="sm:max-w-[600px]"
        triggerElement={
          <TooltipEx
            delay={0}
            triggerElement={
              <span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground/80 transition-none hover:bg-transparent hover:text-foreground disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
                >
                  <CodeIcon size={16} aria-hidden={true} />
                </Button>
              </span>
            }
            className="px-2 py-1 text-xs text-muted-foreground"
          >
            View code
          </TooltipEx>
        }
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

const convertRegistryPaths = (content: string): string => {
  return content.replace(/@\/registry\//g, "@/");
};
