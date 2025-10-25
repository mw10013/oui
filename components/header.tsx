import ReactRouterThemeToggleButton from "@/registry/default/components/oui-react-router-theme-toggle-button";
import { buttonClassName } from "@/registry/default/ui/oui-button";
import { Link } from "@/registry/default/ui/oui-link";
import { siGithub } from "simple-icons";

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
          <Link
            href="https://github.com/mw10013/oui"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName({ variant: "ghost" })}
          >
            <span className="sr-only">GitHub</span>
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
              <path d={siGithub.path} />
            </svg>
          </Link>
          <ReactRouterThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
