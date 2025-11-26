import OuiFieldTextAreaDemo from "@/registry/default/components/oui-text-area-demo";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import * as Oui from "@/registry/default/ui/oui-index";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Textarea } from "@/registry/default/ui/textarea";
import * as Rac from "react-aria-components";

function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

function OuiFieldDemo() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Oui.TextField isRequired>
                <Oui.FieldLabel>Name on Card</Oui.FieldLabel>
                <Oui.Input placeholder="Evil Rabbit" />
              </Oui.TextField>
              <Oui.TextField isRequired>
                <Oui.FieldLabel>Card Number</Oui.FieldLabel>
                <Oui.Input placeholder="1234 5678 9012 3456" />
                <Oui.FieldDescription>
                  Enter your 16-digit card number
                </Oui.FieldDescription>
              </Oui.TextField>
              <div className="grid grid-cols-3 gap-4">
                <Oui.Select placeholder="MM">
                  <Oui.FieldLabel>Month</Oui.FieldLabel>
                  <Oui.SelectButton>
                    <Oui.SelectValue />
                  </Oui.SelectButton>
                  <Oui.Popover>
                    <Rac.ListBox>
                      <Oui.ListBoxItem>01</Oui.ListBoxItem>
                      <Oui.ListBoxItem>02</Oui.ListBoxItem>
                      <Oui.ListBoxItem>03</Oui.ListBoxItem>
                      <Oui.ListBoxItem>04</Oui.ListBoxItem>
                      <Oui.ListBoxItem>05</Oui.ListBoxItem>
                      <Oui.ListBoxItem>06</Oui.ListBoxItem>
                      <Oui.ListBoxItem>07</Oui.ListBoxItem>
                      <Oui.ListBoxItem>08</Oui.ListBoxItem>
                      <Oui.ListBoxItem>09</Oui.ListBoxItem>
                      <Oui.ListBoxItem>10</Oui.ListBoxItem>
                      <Oui.ListBoxItem>11</Oui.ListBoxItem>
                      <Oui.ListBoxItem>12</Oui.ListBoxItem>
                    </Rac.ListBox>
                  </Oui.Popover>
                </Oui.Select>
                <Oui.Select placeholder="YYYY">
                  <Oui.FieldLabel>Year</Oui.FieldLabel>
                  <Oui.SelectButton>
                    <Oui.SelectValue />
                  </Oui.SelectButton>
                  <Oui.Popover>
                    <Rac.ListBox>
                      <Oui.ListBoxItem>2024</Oui.ListBoxItem>
                      <Oui.ListBoxItem>2025</Oui.ListBoxItem>
                      <Oui.ListBoxItem>2026</Oui.ListBoxItem>
                      <Oui.ListBoxItem>2027</Oui.ListBoxItem>
                      <Oui.ListBoxItem>2028</Oui.ListBoxItem>
                      <Oui.ListBoxItem>2029</Oui.ListBoxItem>
                    </Rac.ListBox>
                  </Oui.Popover>
                </Oui.Select>
                <Oui.TextField isRequired>
                  <Oui.FieldLabel>CVV</Oui.FieldLabel>
                  <Oui.Input placeholder="123" />
                </Oui.TextField>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Oui.Field orientation="horizontal">
                <Oui.Checkbox
                  id="oui-checkout-7j9-same-as-shipping-wgm"
                  defaultSelected
                />
                <Oui.FieldLabel
                  htmlFor="oui-checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </Oui.FieldLabel>
              </Oui.Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Oui.TextField>
                <Oui.FieldLabel>Comments</Oui.FieldLabel>
                <Oui.TextArea
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Oui.TextField>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Oui.Button type="submit">Submit</Oui.Button>
            <Oui.Button variant="outline" type="button">
              Cancel
            </Oui.Button>
          </Field>
        </FieldGroup>
      </Rac.Form>
    </div>
  );
}

function FieldInputDemo() {
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

function OuiFieldInputDemo() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form>
        <FieldSet>
          <FieldGroup>
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
          </FieldGroup>
        </FieldSet>
      </Rac.Form>
    </div>
  );
}

function FieldInputErrorDemo() {
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

function OuiFieldInputErrorDemo() {
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
          </FieldGroup>
        </FieldSet>
      </Rac.Form>
    </div>
  );
}

function FieldTextareaDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <FieldInputErrorDemo />
      <OuiFieldInputErrorDemo />
      <FieldTextareaDemo />
      <OuiFieldTextAreaDemo />
      <FieldInputDemo />
      <OuiFieldInputDemo />
      <FieldDemo />
      <OuiFieldDemo />
    </div>
  );
}
