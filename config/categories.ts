export interface Category {
  slug: string;
  name: string;
  components: { name: string }[];
}

export const categories: Category[] = [
  {
    name: "Autocomplete",
    slug: "autocomplete",
    components: [
      { name: "oui-autocomplete-demo" },
      { name: "oui-autocomplete-ex" },
      { name: "oui-autocomplete-ex-demo" },
      { name: "oui-autocomplete-ex-demo-searchable" },
    ],
  },
  {
    name: "Button",
    slug: "button",
    components: [
      { name: "oui-button-demo" },
      { name: "oui-button-demo-outline" },
      { name: "oui-button-demo-ghost" },
      { name: "oui-button-demo-destructive" },
      { name: "oui-button-demo-secondary" },
      { name: "oui-button-demo-link" },
      { name: "oui-button-demo-icon-left" },
      { name: "oui-button-demo-icon-right" },
      { name: "oui-button-demo-disabled" },
      { name: "oui-button-demo-disabled-animation" },
      { name: "oui-button-demo-sm" },
      { name: "oui-button-demo-lg" },
    ],
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    components: [
      { name: "oui-checkbox-demo" },
      { name: "oui-checkbox-demo-border" },
      { name: "oui-checkbox-demo-disabled" },
      { name: "oui-checkbox-ex" },
      { name: "oui-checkbox-ex-demo" },
    ],
  },
  {
    name: "Checkbox Group",
    slug: "checkbox-group",
    components: [
      { name: "oui-checkbox-group-demo" },
      { name: "oui-checkbox-group-ex" },
      { name: "oui-checkbox-group-ex-demo" },
    ],
  },
  {
    name: "Combo Box",
    slug: "combo-box",
    components: [
      { name: "oui-combo-box-demo" },
      { name: "oui-combo-box-ex" },
      { name: "oui-combo-box-ex-demo" },
      { name: "oui-combo-box-ex-demo-avatar" },
      { name: "oui-combo-box-ex-demo-header" },
    ],
  },
  {
    name: "Dialog",
    slug: "dialog",
    components: [
      { name: "oui-dialog-ex" },
      { name: "oui-dialog-ex-demo-form" },
      { name: "oui-dialog-ex-demo-scrollable-content" },
      { name: "oui-dialog-ex-demo-sticky-footer" },
      { name: "oui-dialog-ex-alert" },
      { name: "oui-dialog-ex-demo-alert" },
      { name: "oui-dialog-ex-alert-demo-confirm" },
      { name: "oui-dialog-ex-alert-demo-ack" },
      { name: "oui-dialog-ex-alert-demo-programmatic" },
      { name: "oui-dialog-ex-sheet" },
      { name: "oui-dialog-ex-sheet-demo" },
      { name: "oui-dialog-ex-sheet-demo-sides" },
    ],
  },
  {
    name: "Disclosure",
    slug: "disclosure",
    components: [
      { name: "oui-disclosure-demo" },
      { name: "oui-disclosure-ex" },
      { name: "oui-disclosure-ex-demo" },
      { name: "oui-disclosure-ex-demo-text" },
    ],
  },
  {
    name: "Field Error",
    slug: "field-error",
    components: [],
  },
  {
    name: "Form",
    slug: "form",
    components: [{ name: "oui-form-demo" }],
  },
  {
    name: "Group",
    slug: "group",
    components: [],
  },
  {
    name: "Header",
    slug: "header",
    components: [],
  },
  {
    name: "Heading",
    slug: "heading",
    components: [],
  },
  {
    name: "Index",
    slug: "index",
    components: [{ name: "oui-index-demo" }],
  },
  {
    name: "Input",
    slug: "input",
    components: [
      { name: "oui-input-demo" },
      { name: "oui-input-demo-password" },
      { name: "oui-input-demo-disabled" },
    ],
  },
  {
    name: "Keyboard",
    slug: "keyboard",
    components: [],
  },
  {
    name: "Label",
    slug: "label",
    components: [
      { name: "oui-label-demo" },
      { name: "oui-label-demo-disabled" },
    ],
  },
  {
    name: "Link",
    slug: "link",
    components: [
      { name: "oui-link-demo" },
      { name: "oui-link-demo-hover" },
      { name: "oui-link-demo-always" },
      { name: "oui-link-demo-current" },
      { name: "oui-link-demo-focus" },
      { name: "oui-link-demo-disabled" },
      { name: "oui-link-demo-button" },
      { name: "oui-link-demo-button-outline" },
      { name: "oui-link-demo-button-destructive" },
      { name: "oui-link-demo-button-disabled" },
      { name: "oui-link-demo-login" },
    ],
  },
  {
    name: "List Box",
    slug: "list-box",
    components: [
      { name: "oui-list-box-demo" },
      { name: "oui-list-box-demo-multiple" },
      // { name: "oui-list-box-ex-pagination" },
      // { name: "oui-list-box-ex-pagination-demo" },
    ],
  },
  {
    name: "Menu",
    slug: "menu",
    components: [
      { name: "oui-menu-ex" },
      { name: "oui-menu-ex-demo" },
      { name: "oui-menu-ex-demo-checkboxes" },
      { name: "oui-menu-ex-demo-radio-group" },
      { name: "oui-menu-ex-demo-avatar" },
      { name: "oui-menu-ex-demo-avatar-only" },
      { name: "oui-menu-ex-demo-icon" },
    ],
  },
  {
    name: "Modal",
    slug: "modal",
    components: [{ name: "oui-modal-ex" }, { name: "oui-modal-ex-sheet" }],
  },
  {
    name: "Number Field",
    slug: "number-field",
    components: [
      { name: "oui-number-field-ex" },
      { name: "oui-number-field-ex-demo" },
    ],
  },
  {
    name: "Popover",
    slug: "popover",
    components: [{ name: "oui-popover-ex" }, { name: "oui-popover-ex-demo" }],
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    components: [
      { name: "oui-radio-group-ex" },
      { name: "oui-radio-group-ex-demo" },
      { name: "oui-radio-group-ex-demo-description" },
    ],
  },
  {
    name: "Search Field",
    slug: "search-field",
    components: [
      { name: "oui-search-field-ex" },
      { name: "oui-search-field-ex-demo" },
    ],
  },
  {
    name: "Select",
    slug: "select",
    components: [
      { name: "oui-select-demo" },
      { name: "oui-select-demo-multiple" },
      { name: "oui-select-ex" },
      { name: "oui-select-ex-demo" },
      { name: "oui-select-ex-demo-large-list" },
      { name: "oui-select-ex-demo-icon" },
      { name: "oui-select-ex-demo-disabled" },
      { name: "oui-select-ex-popover" },
    ],
  },
  {
    name: "Separator",
    slug: "separator",
    components: [{ name: "oui-separator-demo" }],
  },
  // {
  //   name: "Sidebar",
  //   slug: "sidebar",
  //   components: [],
  // },
  {
    name: "Slider",
    slug: "slider",
    components: [
      { name: "oui-slider-ex" },
      { name: "oui-slider-ex-demo" },
      { name: "oui-slider-ex-demo-disabled" },
    ],
  },
  {
    name: "Switch",
    slug: "switch",
    components: [
      { name: "oui-switch-ex" },
      { name: "oui-switch-ex-demo" },
      { name: "oui-switch-ex-demo-blue" },
      { name: "oui-switch-ex-demo-description" },
      { name: "oui-switch-ex-demo-disabled" },
    ],
  },
  {
    name: "Table",
    slug: "table",
    components: [
      { name: "oui-table-demo" },
      { name: "oui-table-demo-action-menu" },
    ],
  },
  {
    name: "Tabs",
    slug: "tabs",
    components: [{ name: "oui-tabs-demo" }],
  },
  {
    name: "Text",
    slug: "text",
    components: [],
  },
  {
    name: "Text Area",
    slug: "text-area",
    components: [
      { name: "oui-text-area-demo" },
      { name: "oui-text-area-demo-text-field" },
      { name: "oui-text-area-demo-disabled" },
    ],
  },
  {
    name: "Text Field",
    slug: "text-field",
    components: [
      { name: "oui-text-field-demo" },
      { name: "oui-text-field-ex" },
      { name: "oui-text-field-ex-demo" },
      { name: "oui-text-field-ex-horizontal" },
      { name: "oui-text-field-ex-horizontal-demo" },
    ],
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    components: [
      { name: "oui-tooltip-demo" },
      { name: "oui-tooltip-ex" },
      { name: "oui-tooltip-ex-demo" },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
