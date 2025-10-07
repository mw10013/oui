import { FieldError } from "@/registry/components/ui/oui-field-error";
import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { Text } from "@/registry/components/ui/oui-text";
import { TextField } from "@/registry/components/ui/oui-text-field";
import * as Rac from "react-aria-components";

export interface TextFieldExProps extends Rac.TextFieldProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
}

export function TextFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  ...props
}: TextFieldExProps) {
  return (
    <TextField {...props}>
      {(renderProps) => (
        <>
          {label && typeof label === "string" ? <Label>{label}</Label> : label}
          {children ? (
            typeof children === "function" ? (
              children(renderProps)
            ) : (
              children
            )
          ) : (
            <Input placeholder={placeholder} />
          )}
          {description && <Text slot="description">{description}</Text>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </TextField>
  );
}

export default function Component() {
  return <div className="p-4">TextFieldEx</div>;
}
