import SearchButton from "@/components/search-button";
import { categories } from "@/config/categories";
import { Link } from "@/registry/components/ui/oui-link";
import { Funnel } from "lucide-react";

export default function RouteComponent() {
  return (
    <div data-home>
      <div className="max-w-3xl max-sm:text-center">
        <h1 className="font-heading mb-4 text-4xl/[1.1] font-bold tracking-tight text-foreground md:text-5xl/[1.1]">
          React Aria Components with Shadcn characteristics.
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {/* An open-source collection of copy-and-paste components for UIs. */}
          Copy-and-paste react aria components that run side-by-side with shadcn
          components.
        </p>
        <Link
          href="/filter"
          className="mr-4 inline-flex items-center text-sm"
          underline="hover"
        >
          <Funnel className="me-2" size={14} />
          Filter by Tags
        </Link>
        <SearchButton />
      </div>

      <div className="relative my-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              componentCount={category.components.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CategoryCardProps {
  slug: string;
  name: string;
  componentCount?: number;
}

function CategoryCard({
  slug,
  name,
  componentCount: componentsCount,
}: CategoryCardProps) {
  const href = `/${slug}`;
  // const imageBasePath = `/thumbs/${slug}`;
  // const alt = `${name} components`;

  return (
    <div className="space-y-3 text-center">
      {/* <Link
        href={href}
        className="peer relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
      >
        <ImageComponent imageBasePath={imageBasePath} alt={alt} />
      </Link> */}

      <div className="[&_a]:peer-hover:underline">
        <h2>
          <Link href={href} underline="hover" className="text-sm">
            {name}
          </Link>
        </h2>
        <p className="text-[13px] text-muted-foreground">
          {componentsCount} {componentsCount === 1 ? "Component" : "Components"}
        </p>
      </div>
    </div>
  );
}
