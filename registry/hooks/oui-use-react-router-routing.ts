import * as React from "react";
import * as ReactRouter from "react-router";

// https://github.com/adobe/react-spectrum/issues/6397
// https://github.com/adobe/react-spectrum/issues/6397#issuecomment-2838553394

const isExternal = (href: string) =>
  href.startsWith("https://") ||
  href.startsWith("http://") ||
  href.startsWith("mailto:");

export function useReactRouterRouting() {
  const reactRouterNavigate = ReactRouter.useNavigate();
  const navigate = React.useCallback(
    (path: string, options?: ReactRouter.NavigateOptions) => {
      if (isExternal(path)) {
        window.location.href = path;
      } else {
        void reactRouterNavigate(path, options);
      }
    },
    [reactRouterNavigate],
  );

  const useHref = (href: string) =>
    isExternal(href) ? href : ReactRouter.useHref(href);

  return { navigate, useHref };
}
