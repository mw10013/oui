import * as OuiReactRouter from "@/registry/default/components/oui-react-router-index";
import * as Oui from "@/registry/default/ui/oui-index";
import { Link } from "@/registry/default/ui/oui-link";
import { Circle } from "lucide-react";
import { siGithub } from "simple-icons";

export function Header() {
  return (
    <header className="relative mb-14">
      <div className="flex h-[72px] w-full items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-px text-2xl/[1.1] font-bold tracking-tight text-foreground md:text-3xl/[1.1]"
        >
          <Circle />
          ui
        </Link>
        <div className="flex items-center gap-1">
          <Link
            aria-label="GitHub repo"
            href="https://github.com/mw10013/oui"
            target="_blank"
            rel="noopener noreferrer"
            className={Oui.buttonClassName({ variant: "ghost" })}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={siGithub.path} />
            </svg>
          </Link>
          <OuiReactRouter.ReactRouterThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
