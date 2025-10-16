import ThemeToggle from "@/components/theme-toggle";
import { buttonClassName } from "@/registry/components/ui/oui-button";
import { Link } from "@/registry/components/ui/oui-link";
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
        {/* <Link href="/" className="shrink-0" aria-label="Home">
          <span className="sr-only">Oui</span>
          <img
            src="/logo.svg"
            alt="Oui logo"
            width={117}
            height={24}
            className="dark:hidden"
          />
          <img
            src="/logo-dark.svg"
            alt="Oui logo"
            width={117}
            height={24}
            className="hidden dark:block"
          />
        </Link> */}
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
