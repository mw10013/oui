import { Link } from "@/registry/components/ui/oui-link";

export default function Header() {
  return (
    <header className="relative mb-14">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link href="/" className="shrink-0">
          Oui
        </Link>
      </div>
    </header>
  );
}
