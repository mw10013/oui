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
      { name: "autocomplete-demo" },
      { name: "autocomplete-ex" },
      { name: "autocomplete-ex-demo" },
      { name: "autocomplete-ex-demo-searchable" },
    ],
  },
  {
    name: "Base",
    slug: "base",
    components: [{ name: "base" }],
  },
  {
    name: "Button",
    slug: "button",
    components: [
      { name: "button" },
      { name: "button-demo" },
      { name: "button-demo-outline" },
      { name: "button-demo-ghost" },
      { name: "button-demo-destructive" },
      { name: "button-demo-secondary" },
      { name: "button-demo-link" },
      { name: "button-demo-icon-left" },
      { name: "button-demo-icon-right" },
      { name: "button-demo-disabled" },
      { name: "button-demo-disabled-animation" },
      { name: "button-demo-sm" },
      { name: "button-demo-lg" },
    ],
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    components: [
      { name: "checkbox" },
      { name: "checkbox-demo" },
      { name: "checkbox-demo-border" },
      { name: "checkbox-demo-disabled" },
      { name: "checkbox-ex" },
      { name: "checkbox-ex-demo" },
    ],
  },
  {
    name: "Checkbox Group",
    slug: "checkbox-group",
    components: [
      { name: "checkbox-group" },
      { name: "checkbox-group-demo" },
      { name: "checkbox-group-ex" },
      { name: "checkbox-group-ex-demo" },
    ],
  },
  {
    name: "Combo Box",
    slug: "combo-box",
    components: [
      { name: "combo-box" },
      { name: "combo-box-demo" },
      { name: "combo-box-ex" },
      { name: "combo-box-ex-demo" },
      { name: "combo-box-ex-demo-avatar" },
      { name: "combo-box-ex-demo-header" },
    ],
  },
  {
    name: "Dialog",
    slug: "dialog",
    components: [
      { name: "dialog" },
      { name: "dialog-demo" },
      { name: "dialog-ex" },
      { name: "dialog-ex-demo" },
      { name: "dialog-ex-demo-alert" },
      { name: "dialog-ex-demo-scrollable-content" },
      { name: "dialog-ex-demo-sticky-footer" },
      { name: "dialog-ex-alert" },
      { name: "dialog-ex-alert-demo-confirm" },
      { name: "dialog-ex-alert-demo-ack" },
      { name: "dialog-ex-alert-demo-programmatic" },
      { name: "dialog-ex-sheet" },
      { name: "dialog-ex-sheet-demo" },
      { name: "dialog-ex-sheet-demo-sides" },
    ],
  },
  {
    name: "Disclosure",
    slug: "disclosure",
    components: [
      { name: "disclosure" },
      { name: "disclosure-demo" },
      { name: "disclosure-ex" },
      { name: "disclosure-ex-demo" },
      { name: "disclosure-ex-demo-text" },
    ],
  },
  {
    name: "Field Error",
    slug: "field-error",
    components: [{ name: "field-error" }, { name: "field-error-demo" }],
  },
  {
    name: "Form",
    slug: "form",
    components: [{ name: "form" }, { name: "form-demo" }],
  },
  {
    name: "Group",
    slug: "group",
    components: [{ name: "group" }, { name: "group-demo" }],
  },
  {
    name: "Goodies",
    slug: "goodies",
    components: [{ name: "index" }],
  },
  {
    name: "Header",
    slug: "header",
    components: [{ name: "header" }, { name: "header-demo" }],
  },
  {
    name: "Heading",
    slug: "heading",
    components: [{ name: "heading" }, { name: "heading-demo" }],
  },
  // {
  //   name: "Input",
  //   slug: "input",
  //   components: [
  //     { name: "input-demo" },
  //     { name: "input-demo-password" },
  //     { name: "input-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Keyboard",
  //   slug: "keyboard",
  //   components: [{ name: "keyboard-demo" }],
  // },
  // {
  //   name: "Label",
  //   slug: "label",
  //   components: [
  //     { name: "label-demo" },
  //     { name: "label-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Link",
  //   slug: "link",
  //   components: [
  //     { name: "link-demo" },
  //     { name: "link-demo-hover" },
  //     { name: "link-demo-always" },
  //     { name: "link-demo-current" },
  //     { name: "link-demo-focus" },
  //     { name: "link-demo-disabled" },
  //     { name: "link-demo-button" },
  //     { name: "link-demo-button-outline" },
  //     { name: "link-demo-button-destructive" },
  //     { name: "link-demo-button-disabled" },
  //     { name: "link-demo-login" },
  //   ],
  // },
  // {
  //   name: "List Box",
  //   slug: "list-box",
  //   components: [
  //     { name: "list-box-demo" },
  //     { name: "list-box-demo-multiple" },
  //     // { name: "list-box-ex-pagination" },
  //     // { name: "list-box-ex-pagination-demo" },
  //   ],
  // },
  // {
  //   name: "Menu",
  //   slug: "menu",
  //   components: [
  //     { name: "menu-ex" },
  //     { name: "menu-ex-demo" },
  //     { name: "menu-ex-demo-checkboxes" },
  //     { name: "menu-ex-demo-radio-group" },
  //     { name: "menu-ex-demo-avatar" },
  //     { name: "menu-ex-demo-avatar-only" },
  //     { name: "menu-ex-demo-icon" },
  //   ],
  // },
  // {
  //   name: "Modal",
  //   slug: "modal",
  //   components: [{ name: "modal-ex" }, { name: "modal-ex-sheet" }],
  // },
  // {
  //   name: "Number Field",
  //   slug: "number-field",
  //   components: [
  //     { name: "number-field-ex" },
  //     { name: "number-field-ex-demo" },
  //   ],
  // },
  // {
  //   name: "Popover",
  //   slug: "popover",
  //   components: [{ name: "popover-ex" }, { name: "popover-ex-demo" }],
  // },
  // {
  //   name: "Radio Group",
  //   slug: "radio-group",
  //   components: [
  //     { name: "radio-group-ex" },
  //     { name: "radio-group-ex-demo" },
  //     { name: "radio-group-ex-demo-description" },
  //   ],
  // },
  // {
  //   name: "Search Field",
  //   slug: "search-field",
  //   components: [
  //     { name: "search-field-ex" },
  //     { name: "search-field-ex-demo" },
  //   ],
  // },
  // {
  //   name: "Select",
  //   slug: "select",
  //   components: [
  //     { name: "select-demo" },
  //     { name: "select-demo-multiple" },
  //     { name: "select-ex" },
  //     { name: "select-ex-demo" },
  //     { name: "select-ex-demo-large-list" },
  //     { name: "select-ex-demo-icon" },
  //     { name: "select-ex-demo-disabled" },
  //     { name: "select-ex-popover" },
  //   ],
  // },
  // {
  //   name: "Separator",
  //   slug: "separator",
  //   components: [{ name: "separator-demo" }],
  // },
  // {
  //   name: "Sidebar",
  //   slug: "sidebar",
  //   components: [],
  // },
  // {
  //   name: "Slider",
  //   slug: "slider",
  //   components: [
  //     { name: "slider-ex" },
  //     { name: "slider-ex-demo" },
  //     { name: "slider-ex-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Switch",
  //   slug: "switch",
  //   components: [
  //     { name: "switch-ex" },
  //     { name: "switch-ex-demo" },
  //     { name: "switch-ex-demo-blue" },
  //     { name: "switch-ex-demo-description" },
  //     { name: "switch-ex-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Table",
  //   slug: "table",
  //   components: [
  //     { name: "table-demo" },
  //     { name: "table-demo-action-menu" },
  //   ],
  // },
  // {
  //   name: "Tabs",
  //   slug: "tabs",
  //   components: [{ name: "tabs-demo" }],
  // },
  // {
  //   name: "Text",
  //   slug: "text",
  //   components: [{ name: "text-demo" }],
  // },
  // {
  //   name: "Text Area",
  //   slug: "text-area",
  //   components: [
  //     { name: "text-area-demo" },
  //     { name: "text-area-demo-text-field" },
  //     { name: "text-area-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Text Field",
  //   slug: "text-field",
  //   components: [
  //     { name: "text-field-demo" },
  //     { name: "text-field-ex" },
  //     { name: "text-field-ex-demo" },
  //     { name: "text-field-ex-horizontal" },
  //     { name: "text-field-ex-horizontal-demo" },
  //   ],
  // },
  // {
  //   name: "Toggle Button",
  //   slug: "toggle-button",
  //   components: [
  //     { name: "toggle-button-demo" },
  //     { name: "react-router-theme-toggle-button" },
  //   ],
  // },
  // {
  //   name: "Tooltip",
  //   slug: "tooltip",
  //   components: [
  //     { name: "tooltip-demo" },
  //     { name: "tooltip-ex" },
  //     { name: "tooltip-ex-demo" },
  //   ],
  // },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
