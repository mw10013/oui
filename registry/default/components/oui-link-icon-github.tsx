"use client";

import type * as Rac from "react-aria-components";
import { buttonClassName } from "@/registry/default/ui/oui-button";
import { Link } from "@/registry/default/ui/oui-link";
import { siGithub } from "simple-icons";

interface OuiGithubIconLinkProps
  extends Omit<Rac.LinkProps, "aria-label" | "href" | "rel" | "target"> {
  "aria-label"?: string;
  href?: string;
  rel?: string;
  target?: string;
}

export default function OuiGithubIconLink({
  "aria-label": ariaLabel = "GitHub repo",
  href = "https://github.com/mw10013/oui",
  rel = "noopener noreferrer",
  target = "_blank",
  className = buttonClassName({ variant: "ghost" }),
  ...props
}: OuiGithubIconLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      target={target}
      rel={rel}
      className={className}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d={siGithub.path} />
      </svg>
    </Link>
  );
}
