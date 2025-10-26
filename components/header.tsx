import OuiGithubIconLink from "@/registry/default/components/oui-link-icon-github";
import ReactRouterThemeToggleButton from "@/registry/default/components/oui-react-router-theme-toggle-button";
import { Link } from "@/registry/default/ui/oui-link";

export default function Header() {
  return (
    <header className="relative mb-14">
      <div className="flex h-[72px] w-full items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="text-2xl/[1.1] font-bold tracking-tight text-foreground md:text-3xl/[1.1]"
        >
          Oui
        </Link>
        <div className="flex items-center gap-1">
          <OuiGithubIconLink />
          <ReactRouterThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
