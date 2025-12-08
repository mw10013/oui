"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";

function TextFieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

function OuiTextFieldDemo() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form>
        <Oui.FieldSet>
          <Oui.FieldGroup>
            <Oui.TextField>
              <Oui.FieldLabel>Username</Oui.FieldLabel>
              <Oui.Input type="text" placeholder="Max Leiter" />
              <Oui.FieldDescription>
                Choose a unique username for your account.
              </Oui.FieldDescription>
            </Oui.TextField>
            <Oui.TextField>
              <Oui.FieldLabel>Password</Oui.FieldLabel>
              <Oui.FieldDescription>
                Must be at least 8 characters long.
              </Oui.FieldDescription>
              <Oui.Input type="password" placeholder="••••••••" />
            </Oui.TextField>
          </Oui.FieldGroup>
        </Oui.FieldSet>
      </Rac.Form>
    </div>
  );
}

function TextFieldDemoInvalid() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldSet>
          <FieldGroup>
            <Field data-invalid>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="Max Leiter"
                aria-invalid
              />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
              <FieldError>Username is required.</FieldError>
            </Field>
            <Field data-invalid>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                aria-invalid
              />
              <FieldError
                errors={[
                  { message: "Password must be at least 8 characters." },
                  { message: "Password must contain at least one number." },
                  {
                    message:
                      "Password must contain at least one uppercase letter.",
                  },
                ]}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

function OuiTextFieldDemoInvalid() {
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
        <Oui.FieldSet>
          <Oui.FieldGroup>
            <Oui.TextField name="username">
              <Oui.FieldLabel>Username</Oui.FieldLabel>
              <Oui.Input type="text" placeholder="Max Leiter" />
              <Oui.FieldDescription>
                Choose a unique username for your account.
              </Oui.FieldDescription>
              <Oui.FieldError />
            </Oui.TextField>
            <Oui.TextField name="password">
              <Oui.FieldLabel>Password</Oui.FieldLabel>
              <Oui.FieldDescription>
                Must be at least 8 characters long.
              </Oui.FieldDescription>
              <Oui.Input type="password" placeholder="••••••••" />
              <Oui.FieldError />
            </Oui.TextField>
          </Oui.FieldGroup>
        </Oui.FieldSet>
      </Rac.Form>
    </div>
  );
}

function TextFieldDemoHorizontal() {
  return (
    <div className="w-full max-w-lg">
      <form>
        <FieldSet>
          <FieldGroup className="gap-4">
            <Field className="grid grid-cols-[5rem_1fr] items-start gap-x-4 gap-y-1">
              <FieldLabel htmlFor="username" className="pt-2">
                Username
              </FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription className="col-start-2">
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field className="grid grid-cols-[5rem_1fr] items-start gap-x-4 gap-y-1">
              <FieldLabel htmlFor="password" className="pt-2">
                Password
              </FieldLabel>
              <Input id="password" type="password" placeholder="••••••••" />
              <FieldDescription className="col-start-2">
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

function TextFieldDemoResponsive() {
  return (
    <div className="w-full max-w-lg">
      <form>
        <FieldSet>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <FieldDescription>
                  Choose a unique username for your account.
                </FieldDescription>
              </FieldContent>
              <Input id="username" type="text" placeholder="Max Leiter" />
            </Field>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </FieldContent>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Text Field"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.text-field.tsx"
    >
      <SideBySideSection
        title="Basic"
        shadcn={<TextFieldDemo />}
        oui={<OuiTextFieldDemo />}
      />
      <SideBySideSection
        title="Invalid"
        shadcn={<TextFieldDemoInvalid />}
        oui={<OuiTextFieldDemoInvalid />}
      />
      <SideBySideSection
        title="Horizontal"
        shadcn={<TextFieldDemoHorizontal />}
        oui={null}
      />
      <SideBySideSection
        title="Responsive"
        shadcn={<TextFieldDemoResponsive />}
        oui={null}
      />
    </SideBySidePage>
  );
}
