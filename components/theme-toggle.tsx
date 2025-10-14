import { useId } from "react";
import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

export default function ThemeToggle() {
  const id = useId();
  const [theme, setTheme, metadata] = useTheme();

  const smartToggle = () => {
    /* The smart toggle by @nrjdalal */
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (metadata.definedBy === "SYSTEM") {
      setTheme(prefersDarkScheme ? Theme.LIGHT : Theme.DARK);
    } else if (
      (theme === Theme.LIGHT && !prefersDarkScheme) ||
      (theme === Theme.DARK && prefersDarkScheme)
    ) {
      setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    } else {
      setTheme(null);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <input
        type="checkbox"
        name="theme-toggle"
        id={id}
        className="peer sr-only"
        checked={metadata.definedBy === "SYSTEM"}
        onChange={smartToggle}
        aria-label="Toggle dark mode"
      />
      <label
        className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded text-muted-foreground transition-[color,box-shadow] outline-none peer-focus-visible:border-ring peer-focus-visible:ring-[3px] peer-focus-visible:ring-ring/50 hover:text-foreground/80"
        htmlFor={id}
        aria-hidden="true"
      >
        <Sun className="dark:hidden" size={20} aria-hidden="true" />
        <Moon className="hidden dark:block" size={20} aria-hidden="true" />
        <span className="sr-only">Switch to system/light/dark version</span>
      </label>
    </div>
  );
}
