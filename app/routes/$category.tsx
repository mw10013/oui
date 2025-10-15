import type { Route } from "./+types/$category";
import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader";
import PageGrid from "@/components/page-grid";
import { getCategory } from "@/config/categories";
import { getComponentsByNames } from "@/lib/utils";
import { invariant } from "@epic-web/invariant";

export function loader({ params }: Route.LoaderArgs) {
  const category = getCategory(params.category);
  invariant(category, `Category not found: ${params.category}`);
  const components = getComponentsByNames(
    category.components.map((item) => item.name),
  );
  return { category, components };
}

export default function RouteComponent({
  loaderData: { components },
}: Route.ComponentProps) {
  return (
    <PageGrid>
      {components.map((component) => (
        <ComponentCard key={component.name} component={component}>
          <ComponentLoader name={component.name} />
          <ComponentDetails component={component} />
        </ComponentCard>
      ))}
    </PageGrid>
  );
}
