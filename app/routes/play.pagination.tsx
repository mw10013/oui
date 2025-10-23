import {
  ListBoxExPagination,
  ListBoxItemExPagination,
} from "@/registry/default/components/oui-list-box-ex-pagination";

export default function Componet() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 p-6">
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
