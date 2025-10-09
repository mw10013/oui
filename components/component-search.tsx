"use client";

import type { RegistryTag } from "@/registry/registry-tags";
import type { RegistryItem } from "shadcn/schema";
import { useCallback, useMemo } from "react";
import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
// import ComponentLoader from "@/components/component-loader-client";
import PageGrid from "@/components/page-grid";
import { getComponents } from "@/lib/utils";
import { useSearchParams } from "react-router";
import SearchField from "@/components/search-field";

export default function ComponentSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tags = useMemo(() => {
    return (searchParams
      .get("tags")
      ?.split(",")
      .filter(Boolean)
      .map((tag) => tag.replace(/\+/g, " ")) ?? []) as RegistryTag[];
  }, [searchParams]);

  const filtered = useMemo(() => {
    if (!tags.length) return [];
    return getComponents(tags);
  }, [tags]);

  const updateTags = useCallback(
    (newTags: string[]) => {
      if (newTags.length > 0) {
        const formattedTags = newTags
          .map((tag) => tag.replace(/\s+/g, "+"))
          .join(",");
        setSearchParams({ tags: formattedTags });
      } else {
        setSearchParams({}, { replace: true });
      }
    },
    [setSearchParams],
  );

  return (
    <div className="space-y-4">
      <SearchField selectedTags={tags} onTagChange={updateTags} />
      <PageGrid>
        {filtered.map((component: RegistryItem) => (
          <ComponentCard
            key={component.name}
            component={component}
            isSearchPage
          >
            {/* <ComponentLoader component={component} /> */}
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
        {tags.length > 0 && filtered.length === 0 && (
          <div className="col-span-full py-8 text-center">
            <p className="text-muted-foreground">
              No components found for the selected tags.
            </p>
          </div>
        )}
      </PageGrid>
    </div>
  );
}
