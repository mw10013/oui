import type { BundledLanguage } from "shiki/bundle/web";
import * as React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { codeToHast } from "shiki/bundle/web";

export async function highlight(code: string, lang: BundledLanguage) {
  const hast = await codeToHast(code, {
    lang,
    theme: "github-dark",
  });

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
  }) as React.JSX.Element;
}

interface Props {
  code: string | null;
  lang: BundledLanguage;
  initial?: React.JSX.Element;
  preHighlighted?: React.JSX.Element | null;
}

export function CodeBlock({
  code,
  lang,
  initial,
  preHighlighted,
}: Props) {
  const [content, setContent] = React.useState<React.JSX.Element | null>(
    preHighlighted ?? initial ?? null,
  );

  React.useLayoutEffect(() => {
    // If we have pre-highlighted content, use that
    if (preHighlighted) {
      setContent(preHighlighted);
      return;
    }

    let isMounted = true;

    if (code) {
      void highlight(code, lang).then((result) => {
        if (isMounted) setContent(result);
      });
    } else {
      setContent(
        <pre className="rounded-md bg-zinc-950 p-4">No code available</pre>,
      );
    }

    return () => {
      isMounted = false;
    };
  }, [code, lang, preHighlighted]);

  return content ? (
    <div className="[&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[calc(70svh)] [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:bg-zinc-950! [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:bg-zinc-900!">
      {content}
    </div>
  ) : (
    <pre className="rounded-md bg-zinc-950 p-4">Loading...</pre>
  );
}
