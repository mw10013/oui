"use client";

import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/registry/default/ui/oui-table";

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
  return (
    <Table aria-label="Invoices">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <Column isRowHeader className="w-[100px]">
          Invoice
        </Column>
        <Column>Status</Column>
        <Column>Method</Column>
        <Column className="text-right">Amount</Column>
      </TableHeader>
      <TableBody items={invoices}>
        {(invoice) => (
          <Row id={invoice.invoice}>
            <Cell className="font-medium">{invoice.invoice}</Cell>
            <Cell>{invoice.paymentStatus}</Cell>
            <Cell>{invoice.paymentMethod}</Cell>
            <Cell className="text-right">{invoice.totalAmount}</Cell>
          </Row>
        )}
      </TableBody>
      {/* <TableFooter>
        <TableRow id="footer-total-row">
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
