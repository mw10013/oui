"use client";

import { FieldError } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { Text } from "@/registry/default/ui/oui-text";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export interface TextFieldExHorizontalProps extends Rac.TextFieldProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
}

/**
 * A TextField component where the label and input are arranged side-by-side.
 */
export function TextFieldExHorizontal({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  ...props
}: TextFieldExHorizontalProps) {
  return (
    <TextField {...props}>
      {(renderProps) => (
        <>
          <div className="grid grid-cols-3 items-center gap-4">
            {label && typeof label === "string" ? (
              <Label>{label}</Label>
            ) : (
              label
            )}
            {children ? (
              typeof children === "function" ? (
                children(renderProps)
              ) : (
                children
              )
            ) : (
              <Input
                placeholder={placeholder}
                className={label ? "col-span-2" : "col-span-3"}
              />
            )}
          </div>
          {description && <Text slot="description">{description}</Text>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </TextField>
  );
}
