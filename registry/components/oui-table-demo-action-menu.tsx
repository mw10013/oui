"use client";

import * as React from "react";
import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Checkbox } from "@/registry/components/ui/oui-checkbox";
import { MenuItem } from "@/registry/components/ui/oui-menu";
import { Separator } from "@/registry/components/ui/oui-separator";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/registry/components/ui/oui-table";
import { MoreHorizontal } from "lucide-react";
import * as Rac from "react-aria-components";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Component() {
  const [sortDescriptor, setSortDescriptor] = React.useState<
    Rac.SortDescriptor | undefined
  >(undefined);

  const sortedInvoices = React.useMemo(() => {
    if (!sortDescriptor?.column) {
      return invoices;
    }
    const items = [...invoices];
    items.sort((a, b) => {
      const first = a[sortDescriptor.column as keyof typeof a];
      const second = b[sortDescriptor.column as keyof typeof b];
      let cmp = 0;
      if (typeof first === "string" && typeof second === "string") {
        cmp = first.localeCompare(second);
      } else if (typeof first === "number" && typeof second === "number") {
        cmp = first < second ? -1 : first > second ? 1 : 0;
      }

      if (sortDescriptor.direction === "descending") {
        cmp *= -1;
      }
      return cmp;
    });
    return items;
  }, [sortDescriptor]);

  return (
    <Table
      aria-label="Invoices"
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableHeader>
        <Column>
          <Checkbox slot="selection" />
        </Column>
        <Column id="invoice" isRowHeader className="w-[100px]">
          Invoice
        </Column>
        <Column id="paymentStatus" allowsSorting>
          Status
        </Column>
        <Column id="paymentMethod" allowsSorting>
          Method
        </Column>
        <Column id="totalAmount" className="text-right">
          Amount
        </Column>
        <Column id="actions" aria-label="Actions" className="w-10 text-right">
          <span className="sr-only">Actions</span>
        </Column>
      </TableHeader>
      <TableBody items={sortedInvoices}>
        {(invoice) => (
          <Row id={invoice.invoice}>
            <Cell>
              <Checkbox slot="selection" />
            </Cell>
            <Cell className="font-medium">{invoice.invoice}</Cell>
            <Cell>{invoice.paymentStatus}</Cell>
            <Cell>{invoice.paymentMethod}</Cell>
            <Cell className="text-right">{invoice.totalAmount}</Cell>
            <Cell className="text-right">
              <MenuEx
                triggerElement={
                  <Button variant="ghost" className="size-8 p-0">
                    <span className="sr-only">
                      Open menu for {invoice.invoice}
                    </span>
                    <MoreHorizontal className="size-4" />
                  </Button>
                }
                onAction={(key) => {
                  // Placeholder for future action handling
                  console.log(
                    `Action: ${String(key)} for invoice ${invoice.invoice}`,
                  );
                }}
              >
                <MenuItem id="copyId">Copy payment ID</MenuItem>
                <Separator variant="menu" />
                <MenuItem id="viewCustomer">View customer</MenuItem>
                <MenuItem id="viewDetails">View payment details</MenuItem>
              </MenuEx>
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
