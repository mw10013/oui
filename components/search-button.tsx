import { useEffect } from "react";
import { Link } from "@/registry/components/ui/oui-link";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

export default function SearchButton() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        void navigate("/search");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <Link
      href="/search"
      className="inline-flex h-10 w-fit min-w-72 cursor-text rounded-full border bg-background px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring focus:ring-[3px] focus:ring-ring/50"
    >
      <span className="flex grow items-center gap-2">
        <Search
          className="-ms-1 text-muted-foreground"
          size={20}
          aria-hidden="true"
        />
        <span className="font-normal text-zinc-400 dark:text-zinc-500">
          Quick search...
        </span>
        <div className="pointer-events-none ml-auto flex items-center justify-center text-muted-foreground/80">
          <kbd className="inline-flex font-[inherit] text-xs font-medium text-muted-foreground">
            <span className="opacity-70">⌘</span>K
          </kbd>
        </div>
      </span>
    </Link>
  );
}
