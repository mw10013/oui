import { SideBySidePage } from "@/components/side-by-side-page";
import { SideBySideSection } from "@/components/side-by-side-section";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Field,
  FieldDescription,
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
        <Oui.FieldGroup>
          <Oui.FieldSet>
            <Oui.FieldLegend>Payment Method</Oui.FieldLegend>
            <Oui.FieldDescription>
              All transactions are secure and encrypted
            </Oui.FieldDescription>
            <Oui.FieldGroup>
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
            </Oui.FieldGroup>
          </Oui.FieldSet>
          <Oui.FieldSeparator />
          <Oui.FieldSet>
            <Oui.FieldLegend>Billing Address</Oui.FieldLegend>
            <Oui.FieldDescription>
              The billing address associated with your payment method
            </Oui.FieldDescription>
            <Oui.FieldGroup>
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
            </Oui.FieldGroup>
          </Oui.FieldSet>
          <Oui.FieldSet>
            <Oui.FieldGroup>
              <Oui.TextField>
                <Oui.FieldLabel>Comments</Oui.FieldLabel>
                <Oui.TextArea
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Oui.TextField>
            </Oui.FieldGroup>
          </Oui.FieldSet>
          <Oui.Field orientation="horizontal">
            <Oui.Button type="submit">Submit</Oui.Button>
            <Oui.Button variant="outline" type="button">
              Cancel
            </Oui.Button>
          </Oui.Field>
        </Oui.FieldGroup>
      </Rac.Form>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Field"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.field.tsx"
    >
      <SideBySideSection
        title="Form"
        shadcn={<FieldDemo />}
        oui={<OuiFieldDemo />}
      />
    </SideBySidePage>
  );
}
