import type { RegistryTag } from "@/registry/registry-tags";
import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/filter";
import PageHeader from "@/components/page-header";
import { getAvailableTags, getComponents } from "@/lib/utils";
import { SelectEx } from "@/registry/components/oui-select-ex";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { registryTags } from "@/registry/registry-tags";

// export const metadata: Metadata = {
//   title: "Filter Oui components",
//   description: "Filter components in the Oui library.",
// }

export function loader({ request }: LoaderFunctionArgs) {
  const items = registryTags.map((tag) => ({ id: tag }));
  const url = new URL(request.url);
  const tagsParam = url.searchParams.get("tags");
  const tags = tagsParam
    ? tagsParam
        .split(",")
        .filter(Boolean)
        .map((tag) => tag.replace(/\+/g, " "))
    : [];
  const components = getComponents(tags as RegistryTag[]);
  const availableTags = getAvailableTags(tags as RegistryTag[]);
  return { tags, items, availableTags, components };
}

export default function RouteComponent({
  loaderData: { items, ...loaderData },
}: Route.ComponentProps) {
  return (
    <>
      <PageHeader title="Filter" className="mb-10">
        Use this page to filter components by tags.
      </PageHeader>
      <SelectEx
        aria-label="Select tags"
        items={items}
        selectionMode="multiple"
        placeholder="Select tags"
      >
        {(item) => <ListBoxItem>{item.id}</ListBoxItem>}
      </SelectEx>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </>
  );
}
