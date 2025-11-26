"use client";

import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form
        validationErrors={{
          username: "Username is required.",
          password: [
            "Password must be at least 8 characters.",
            "Password must contain at least one number.",
            "Password must contain at least one uppercase letter.",
          ],
        }}
      >
        <FieldSet>
          <FieldGroup>
            <TextField name="username">
              <FieldLabel>Username</FieldLabel>
              <Input type="text" placeholder="Max Leiter" />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
              <FieldError />
            </TextField>
            <TextField name="password">
              <FieldLabel>Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input type="password" placeholder="••••••••" />
              <FieldError />
            </TextField>
          </FieldGroup>
        </FieldSet>
      </Rac.Form>
    </div>
  );
}
