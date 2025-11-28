"use client";

import * as React from "react";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";

/**
 * Hook that generates an ID but only returns it if an element with that ID exists in the DOM.
 * Prevents dangling aria-describedby references when slotted elements are not rendered.
 *
 * Simplified version of RAC's useSlotId. Edge case: if a slotted child suspends after the
 * parent renders but before mounting, the ID may dangle until the next render. This doesn't
 * apply when Suspense wraps the entire Field—only when a slot child itself suspends.
 */
function useSlotId(deps: React.DependencyList = []): string | undefined {
  const id = React.useId();
  const [resolvedId, setResolvedId] = React.useState<string | undefined>(id);
  React.useLayoutEffect(() => {
    setResolvedId(document.getElementById(id) ? id : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ...deps]);
  return resolvedId;
}

function FieldCheckbox({ children }: { children: React.ReactNode }) {
  const descriptionId = useSlotId();
  const errorMessageId = useSlotId();
  console.log(
    `FieldCheckbox: ${JSON.stringify({ descriptionId, errorMessageId }, null, 2)}`,
  );
  return (
    <div className="group/field flex flex-col gap-2">
      <Rac.TextContext.Provider
        value={{
          slots: {
            description: { id: descriptionId },
            errorMessage: { id: errorMessageId },
          },
        }}
      >
        <Rac.CheckboxContext.Provider
          value={{ "aria-describedby": descriptionId }}
        >
          {children}
        </Rac.CheckboxContext.Provider>
      </Rac.TextContext.Provider>
    </div>
  );
}

function CheckboxWrapper(props: React.ComponentProps<typeof Oui.Checkbox>) {
  const context = React.useContext(Rac.CheckboxContext);
  console.log("Checkbox context:", JSON.stringify(context, null, 2));
  return <Oui.Checkbox {...props} />;
}

function FieldDescriptionWrapper(
  props: React.ComponentProps<typeof Oui.FieldDescription>,
) {
  const context = React.useContext(Rac.TextContext);
  console.log("Text context (description):", JSON.stringify(context, null, 2));
  return <Oui.FieldDescription {...props} />;
}

export default function RouteComponent() {
  return (
    <div className="mx-auto max-w-md p-6">
      <FieldCheckbox>
        <CheckboxWrapper>Subscribe to newsletter</CheckboxWrapper>
        <FieldDescriptionWrapper>
          Receive weekly updates.
        </FieldDescriptionWrapper>
      </FieldCheckbox>
    </div>
  );
}
