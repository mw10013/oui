import type { RegistryTag } from "@/registry/registry-tags";
import type { LoaderFunctionArgs } from "react-router";
import PageHeader from "@/components/page-header";
import { getAvailableTags, getComponents } from "@/lib/utils";
import { useLoaderData } from "react-router";

// export const metadata: Metadata = {
//   title: "Filter Oui components",
//   description: "Filter components in the Oui library.",
// }

export function loader({ request }: LoaderFunctionArgs) {
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
  return { tags, availableTags, components };
}

export default function RouteComponent() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader title="Filter" className="mb-10">
        Use this page to filter components by tags.
      </PageHeader>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
