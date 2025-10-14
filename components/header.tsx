import { Link } from "@/registry/components/ui/oui-link";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="relative mb-14">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link href="/" className="shrink-0">
          Oui
        </Link>
        <div className="flex items-center gap-1">
          <a
            className="inline-flex size-9 items-center justify-center rounded text-muted-foreground outline-none hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            href="https://github.com/origin-space/originui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
