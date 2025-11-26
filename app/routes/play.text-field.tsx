import OuiTextFieldDemo from "@/registry/default/components/oui-text-field-demo";
import OuiTextFieldDemoInvalid from "@/registry/default/components/oui-text-field-demo-invalid";
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

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <TextFieldDemo />
      <OuiTextFieldDemo />
      <TextFieldDemoInvalid />
      <OuiTextFieldDemoInvalid />
      <TextFieldDemoHorizontal />
      <TextFieldDemoResponsive />
    </div>
  );
}
