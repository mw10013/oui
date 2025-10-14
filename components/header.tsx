import { buttonClassName } from "@/registry/components/ui/oui-button";
import { Link } from "@/registry/components/ui/oui-link";
import { siGithub } from "simple-icons";

export default function Header() {
  return (
    <header className="relative mb-14">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link href="/" className="shrink-0">
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
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
