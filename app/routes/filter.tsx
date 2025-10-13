import type { RegistryTag } from "@/registry/registry-tags";
import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/filter";
import PageHeader from "@/components/page-header";
import { getAvailableTags, getComponents, getDisabledTags } from "@/lib/utils";
import { SelectEx } from "@/registry/components/oui-select-ex";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { registryTags } from "@/registry/registry-tags";
import { useSearchParams } from "react-router";

// export const metadata: Metadata = {
//   title: "Filter Oui components",
//   description: "Filter components in the Oui library.",
// }

export function loader({ request }: LoaderFunctionArgs) {
  const items = registryTags.map((tag) => ({ id: tag }));
  const tagsParam = new URL(request.url).searchParams.get("tags");
  const tags = tagsParam
    ? tagsParam
        .split(",")
        .filter(Boolean)
        .map((tag) => tag.replace(/\+/g, " "))
    : [];
  const components = getComponents(tags as RegistryTag[]);
  const availableTags = getAvailableTags(tags as RegistryTag[]);
  const disabledTags = getDisabledTags(tags as RegistryTag[]);
  return { disabledTags, tags, items, availableTags, components };
}

export default function RouteComponent({
  loaderData: { disabledTags, items, tags, ...loaderData },
}: Route.ComponentProps) {
  const [_, setSearchParams] = useSearchParams();

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
          if (value.length > 0) {
            const formattedTags = value
              .map((tag) => String(tag).replace(/\s+/g, "+"))
              .join(",");
            setSearchParams({ tags: formattedTags });
          } else {
            setSearchParams({}, { replace: true });
          }
        }}
      >
        {(item) => <ListBoxItem>{item.id}</ListBoxItem>}
      </SelectEx>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </>
  );
}
