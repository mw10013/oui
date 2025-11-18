import { twMerge } from "tailwind-merge";

interface PageHeaderProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={twMerge("mb-16 text-center", className)}>
      <h1 className="mb-3 text-4xl/[1.1] font-bold tracking-tight text-foreground md:text-5xl/[1.1]">
        {title}
      </h1>
      <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
        {children}
      </p>
    </div>
  );
}
