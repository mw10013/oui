import { Suspense } from "react";
import ComponentSearch from "@/components/component-search";
import PageHeader from "@/components/page-header";

// export const metadata: Metadata = {
//   title: "Search a Origin UI component",
//   description: "Search for components in the Origin UI library.",
// }

export default function Page() {
  return (
    <>
      <PageHeader title="Search Oui" className="mb-10">
        Use this page to quickly find a component (e.g., multiselect, vertical
        slider, etc.)
      </PageHeader>
      <Suspense>
        <ComponentSearch />
      </Suspense>
    </>
  );
}
