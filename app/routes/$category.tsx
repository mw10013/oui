import type { Route } from "./+types/$category";
import { ComponentCard } from "@/components/component-card";
import { ComponentDetails } from "@/components/component-details";
import { ComponentLoader } from "@/components/component-loader";
import { PageGrid } from "@/components/page-grid";
import { PageHeader } from "@/components/page-header";
import { getCategory } from "@/config/categories";
import { getComponentsByNames } from "@/lib/utils";
import { invariant } from "@epic-web/invariant";

export function loader({ params }: Route.LoaderArgs) {
  const category = getCategory(params.category);
  invariant(category, `Category not found: ${params.category}`);
  const components = getComponentsByNames(
    category.components.map((item) => item.name),
  );
  return { categoryName: category.name, components };
}

export default function RouteComponent({
  loaderData: { categoryName, components },
}: Route.ComponentProps) {
  return (
    <>
      <title>{`Oui - ${categoryName} Category`}</title>
      <meta
        name="description"
        content={`${categoryName} components - Copy-and-paste react aria components that run side-by-side with shadcn components.`}
      />
      <meta property="og:title" content={`${categoryName} - Oui`} />
      <meta
        property="og:description"
        content={`${categoryName} components - Copy-and-paste react aria components that run side-by-side with shadcn components.`}
      />
      <PageHeader title={categoryName} className="mb-10" />
      <PageGrid>
        {components.map((component) => (
          <ComponentCard key={component.name} component={component}>
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>
    </>
  );
}
