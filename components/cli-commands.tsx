import { CopyButton } from "@/components/copy-button";
import { useConfig } from "@/hooks/use-config";
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/oui-tabs";

export function CliCommands({ name }: { name: string }) {
  const [config, setConfig] = useConfig();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const packageManager = config.packageManager || "pnpm";

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add @oui/${name}`,
    npm: `npx shadcn@latest add @oui/${name}`,
    yarn: `yarn shadcn@latest add @oui/${name}`,
    bun: `bunx --bun shadcn@latest add @oui/${name}`,
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
      >
        <TabList>
          <Tab id="pnpm">pnpm</Tab>
          <Tab id="npm">npm</Tab>
          <Tab id="yarn">yarn</Tab>
          <Tab id="bun">bun</Tab>
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
