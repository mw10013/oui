import type { RegistryTag } from "@/registry/registry-tags";
import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/filter";
import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getAvailableTags, getComponents, getDisabledTags } from "@/lib/utils";
import { SelectEx } from "@/registry/components/oui-select-ex";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { useSearchParams } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  const tagsParam = new URL(request.url).searchParams.get("tags");
  const tags = tagsParam
    ? tagsParam
        .split(",")
        .filter(Boolean)
        .map((tag) => tag.replace(/\+/g, " "))
        .sort()
    : [];
  const components = tags.length ? getComponents(tags as RegistryTag[]) : [];
  const availableTags = getAvailableTags(tags as RegistryTag[]);
  const disabledTags = getDisabledTags(tags as RegistryTag[]);
  return {
    tags,
    disabledTags,
    items: [...tags, ...availableTags, ...disabledTags].map((tag) => ({
      id: tag,
    })),
    components,
  };
}

export default function RouteComponent({
  loaderData: { disabledTags, items, tags, components },
}: Route.ComponentProps) {
  const [_, setSearchParams] = useSearchParams();
  return (
    <>
      <PageHeader title="Filter" className="mb-10" />
      <div className="mb-4 flex justify-center">
        <SelectEx
          aria-label="Select tags"
          placeholder="Select tags"
          items={items}
          selectionMode="multiple"
          disabledKeys={disabledTags}
          value={tags}
          onChange={(value) => {
            if (value.length > 0) {
              const tags = value
                .map((key) => String(key).replace(/\s+/g, "+"))
                .join(",");
              setSearchParams({ tags });
            } else {
              setSearchParams({});
            }
          }}
        >
          {(item) => <ListBoxItem>{item.id}</ListBoxItem>}
        </SelectEx>
      </div>
      <PageGrid>
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            isSearchPage
          >
            <ComponentLoader name={component.name} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>
    </>
  );
}
