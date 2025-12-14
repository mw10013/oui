"use client";

import {
  Pagination,
  PaginationItem,
} from "@/registry/default/ui/oui-pagination";

export default function Component() {
  return (
    <div className="flex flex-col gap-6">
      <Pagination defaultSelectedKeys={["2"]}>
        <PaginationItem id="prev">Previous</PaginationItem>
        <PaginationItem id="1">1</PaginationItem>
        <PaginationItem id="2">2</PaginationItem>
        <PaginationItem id="3">3</PaginationItem>
        <PaginationItem id="next">Next</PaginationItem>
      </Pagination>
    </div>
  );
}
