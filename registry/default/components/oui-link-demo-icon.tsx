"use client";

import { buttonClassName } from "@/registry/default/ui/oui-button";
import * as Rac from "react-aria-components";
import { siGithub } from "simple-icons";

export default function Component() {
  return (
    <Rac.Link
      aria-label="GitHub repo"
      href="https://github.com/mw10013/oui"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClassName({ variant: "ghost" })}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d={siGithub.path} />
      </svg>
    </Rac.Link>
  );
}
