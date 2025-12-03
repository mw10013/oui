"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import { TextArea } from "@/registry/default/ui/oui-text-area";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function OuiFieldDemo() {
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
              <TextField isRequired>
                <FieldLabel>Name on Card</FieldLabel>
                <Input placeholder="Evil Rabbit" />
              </TextField>
              <TextField isRequired>
                <FieldLabel>Card Number</FieldLabel>
                <Input placeholder="1234 5678 9012 3456" />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </TextField>
              <div className="grid grid-cols-3 gap-4">
                <Select placeholder="MM">
                  <FieldLabel>Month</FieldLabel>
                  <SelectButton>
                    <SelectValue />
                  </SelectButton>
                  <Popover>
                    <Rac.ListBox>
                      <ListBoxItem>01</ListBoxItem>
                      <ListBoxItem>02</ListBoxItem>
                      <ListBoxItem>03</ListBoxItem>
                      <ListBoxItem>04</ListBoxItem>
                      <ListBoxItem>05</ListBoxItem>
                      <ListBoxItem>06</ListBoxItem>
                      <ListBoxItem>07</ListBoxItem>
                      <ListBoxItem>08</ListBoxItem>
                      <ListBoxItem>09</ListBoxItem>
                      <ListBoxItem>10</ListBoxItem>
                      <ListBoxItem>11</ListBoxItem>
                      <ListBoxItem>12</ListBoxItem>
                    </Rac.ListBox>
                  </Popover>
                </Select>
                <Select placeholder="YYYY">
                  <FieldLabel>Year</FieldLabel>
                  <SelectButton>
                    <SelectValue />
                  </SelectButton>
                  <Popover>
                    <Rac.ListBox>
                      <ListBoxItem>2024</ListBoxItem>
                      <ListBoxItem>2025</ListBoxItem>
                      <ListBoxItem>2026</ListBoxItem>
                      <ListBoxItem>2027</ListBoxItem>
                      <ListBoxItem>2028</ListBoxItem>
                      <ListBoxItem>2029</ListBoxItem>
                    </Rac.ListBox>
                  </Popover>
                </Select>
                <TextField isRequired>
                  <FieldLabel>CVV</FieldLabel>
                  <Input placeholder="123" />
                </TextField>
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
                  id="oui-checkout-7j9-same-as-shipping-wgm"
                  defaultSelected
                />
                <FieldLabel
                  htmlFor="oui-checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <TextField>
                <FieldLabel>Comments</FieldLabel>
                <TextArea
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </TextField>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </Rac.Form>
    </div>
  );
}
