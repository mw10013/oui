"use client";
import {
  ListBoxExPagination,
  ListBoxItemExPagination,
} from "@/registry/components/oui-list-box-ex-pagination";

export default function Component() {
  return (
    <div className="flex flex-col gap-6">
      <ListBoxExPagination defaultSelectedKeys={["2"]}>
        <ListBoxItemExPagination id="prev">Previous</ListBoxItemExPagination>
        <ListBoxItemExPagination id="1">1</ListBoxItemExPagination>
        <ListBoxItemExPagination id="2">2</ListBoxItemExPagination>
        <ListBoxItemExPagination id="3">3</ListBoxItemExPagination>
        <ListBoxItemExPagination id="next">Next</ListBoxItemExPagination>
      </ListBoxExPagination>
    </div>
  );
}
