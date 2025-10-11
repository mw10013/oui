import CopyButton from "@/components/copy-button";
import { useConfig } from "@/hooks/use-config";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/ui/tabs";

export default function CliCommands({ name }: { name: string }) {
  const [config, setConfig] = useConfig();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const packageManager = config.packageManager || "pnpm";

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
    npm: `npx shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
    yarn: `npx shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
  };

  return (
    <div className="relative">
      <Tabs
        value={packageManager}
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
          })
        }}
        className="rounded-md bg-zinc-950 dark:bg-zinc-900"
      >
        <TabsList className="dark h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0">
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="pnpm"
          >
            pnpm
          </TabsTrigger>
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="npm"
          >
            npm
          </TabsTrigger>
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="yarn"
          >
            yarn
          </TabsTrigger>
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="bun"
          >
            bun
          </TabsTrigger>
        </TabsList>
        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className="m-0" key={pkg} value={pkg}>
            <pre className="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100">
              {command}
            </pre>
          </TabsContent>
        ))}
      </Tabs>
      <CopyButton
        componentSource={commands[packageManager]}
        className="top-1"
      />
    </div>
  );
}
