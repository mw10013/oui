import CopyButton from "@/components/copy-button";
import { useConfig } from "@/hooks/use-config";
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/oui-tabs";

export default function CliCommands({ name }: { name: string }) {
  const [config, setConfig] = useConfig();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const packageManager = config.packageManager || "pnpm";

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
    npm: `npx shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
    yarn: `yarn shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add https://oui.mw10013.workers.dev/r/${name}.json`,
  };

  return (
    <div className="relative">
      <Tabs
        selectedKey={packageManager}
        onSelectionChange={(key) => {
          setConfig({
            ...config,
            packageManager: key as "pnpm" | "npm" | "yarn" | "bun",
          });
        }}
        // className="rounded-md bg-zinc-950 dark:bg-zinc-900"
      >
        <TabList
        // className="bg-zinc-950 dark:bg-zinc-900"
        >
          <Tab
            id="pnpm"
            // className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
          >
            pnpm
          </Tab>
          <Tab
            id="npm"
            // className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
          >
            npm
          </Tab>
          <Tab
            id="yarn"
            // className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
          >
            yarn
          </Tab>
          <Tab
            id="bun"
            // className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
          >
            bun
          </Tab>
        </TabList>
        {Object.entries(commands).map(([pkg, command]) => (
          <TabPanel
            id={pkg}
            key={pkg}
            className="rounded-md bg-zinc-950 dark:bg-zinc-900"
          >
            <pre className="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100">
              {command}
            </pre>
          </TabPanel>
        ))}
      </Tabs>
      <CopyButton
        componentSource={commands[packageManager]}
        className="top-1"
      />
    </div>
  );
}
