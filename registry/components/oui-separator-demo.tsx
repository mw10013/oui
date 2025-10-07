import { Separator } from "@/registry/components/ui/oui-separator";

export default function Component() {
  return (
    <div className="h-fit rounded-lg border p-4">
      <div className="flex flex-col gap-1">
        <div className="text-sm leading-none font-medium">Tailwind CSS</div>
        <div className="text-sm text-muted-foreground">
          A utility-first CSS framework.
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
