import type { RegistryTag } from "@/registry/registry-tags";
import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/filter";
import { lazy, Suspense } from "react";
import PageHeader from "@/components/page-header";
import { getAvailableTags, getComponents, getDisabledTags } from "@/lib/utils";
import { SelectEx } from "@/registry/components/oui-select-ex";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { registryTags } from "@/registry/registry-tags";
import { useSearchParams } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  const items = registryTags.map((tag) => ({ id: tag }));
  const tagsParam = new URL(request.url).searchParams.get("tags");
  const tags = tagsParam
    ? tagsParam
        .split(",")
        .filter(Boolean)
        .map((tag) => tag.replace(/\+/g, " "))
    : [];
  const components = tags.length ? getComponents(tags as RegistryTag[]) : [];
  const availableTags = getAvailableTags(tags as RegistryTag[]);
  const disabledTags = getDisabledTags(tags as RegistryTag[]);
  console.log({ tags, components: components.map((c) => c.name) });
  return { disabledTags, tags, items, availableTags, components };
}

export default function RouteComponent({
  loaderData: { disabledTags, items, tags, components },
}: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <PageHeader title="Filter" className="mb-10">
        Use this page to filter components by tags.
      </PageHeader>
      <SelectEx
        aria-label="Select tags"
        placeholder="Select tags"
        items={items}
        selectionMode="multiple"
        disabledKeys={disabledTags}
        value={tags}
        onChange={(value) => {
          const tags = value as string[];
          if (tags.length > 0) {
            const formattedTags = tags
              .map((tag) => tag.replace(/\s+/g, "+"))
              .join(",");
            setSearchParams({ tags: formattedTags });
          } else {
            setSearchParams({}, { replace: true });
          }
        }}
      >
        {(item) => <ListBoxItem>{item.id}</ListBoxItem>}
      </SelectEx>
      <div className="flex flex-col gap-2">
        {components.map((component) => {
          const Component = lazy(
            () => import(`../../registry/components/${component.name}.tsx`),
          );
          return (
            <div key={component.name} className="flex flex-col gap-1">
              {component.name}
              <Suspense>
                <Component />
              </Suspense>
            </div>
          );
        })}
      </div>
      <pre>
        {JSON.stringify(
          { tags, searchParams: Object.fromEntries(searchParams) },
          null,
          2,
        )}
      </pre>
    </>
  );
}
