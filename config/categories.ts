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
  // {
  //   name: "Disclosure",
  //   slug: "disclosure",
  //   components: [
  //     { name: "oui-disclosure-demo" },
  //     { name: "oui-disclosure-ex" },
  //     { name: "oui-disclosure-ex-demo" },
  //     { name: "oui-disclosure-ex-demo-text" },
  //   ],
  // },
  // {
  //   name: "Field Error",
  //   slug: "field-error",
  //   components: [{ name: "oui-field-error-demo" }],
  // },
  // {
  //   name: "Form",
  //   slug: "form",
  //   components: [{ name: "oui-form-demo" }],
  // },
  // {
  //   name: "Group",
  //   slug: "group",
  //   components: [{ name: "oui-group-demo" }],
  // },
  // {
  //   name: "Header",
  //   slug: "header",
  //   components: [{ name: "oui-header-demo" }],
  // },
  // {
  //   name: "Heading",
  //   slug: "heading",
  //   components: [{ name: "oui-heading-demo" }],
  // },
  // {
  //   name: "Index",
  //   slug: "index",
  //   components: [{ name: "oui-index-demo" }],
  // },
  // {
  //   name: "Input",
  //   slug: "input",
  //   components: [
  //     { name: "oui-input-demo" },
  //     { name: "oui-input-demo-password" },
  //     { name: "oui-input-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Keyboard",
  //   slug: "keyboard",
  //   components: [{ name: "oui-keyboard-demo" }],
  // },
  // {
  //   name: "Label",
  //   slug: "label",
  //   components: [
  //     { name: "oui-label-demo" },
  //     { name: "oui-label-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Link",
  //   slug: "link",
  //   components: [
  //     { name: "oui-link-demo" },
  //     { name: "oui-link-demo-hover" },
  //     { name: "oui-link-demo-always" },
  //     { name: "oui-link-demo-current" },
  //     { name: "oui-link-demo-focus" },
  //     { name: "oui-link-demo-disabled" },
  //     { name: "oui-link-demo-button" },
  //     { name: "oui-link-demo-button-outline" },
  //     { name: "oui-link-demo-button-destructive" },
  //     { name: "oui-link-demo-button-disabled" },
  //     { name: "oui-link-demo-login" },
  //   ],
  // },
  // {
  //   name: "List Box",
  //   slug: "list-box",
  //   components: [
  //     { name: "oui-list-box-demo" },
  //     { name: "oui-list-box-demo-multiple" },
  //     // { name: "oui-list-box-ex-pagination" },
  //     // { name: "oui-list-box-ex-pagination-demo" },
  //   ],
  // },
  // {
  //   name: "Menu",
  //   slug: "menu",
  //   components: [
  //     { name: "oui-menu-ex" },
  //     { name: "oui-menu-ex-demo" },
  //     { name: "oui-menu-ex-demo-checkboxes" },
  //     { name: "oui-menu-ex-demo-radio-group" },
  //     { name: "oui-menu-ex-demo-avatar" },
  //     { name: "oui-menu-ex-demo-avatar-only" },
  //     { name: "oui-menu-ex-demo-icon" },
  //   ],
  // },
  // {
  //   name: "Modal",
  //   slug: "modal",
  //   components: [{ name: "oui-modal-ex" }, { name: "oui-modal-ex-sheet" }],
  // },
  // {
  //   name: "Number Field",
  //   slug: "number-field",
  //   components: [
  //     { name: "oui-number-field-ex" },
  //     { name: "oui-number-field-ex-demo" },
  //   ],
  // },
  // {
  //   name: "Popover",
  //   slug: "popover",
  //   components: [{ name: "oui-popover-ex" }, { name: "oui-popover-ex-demo" }],
  // },
  // {
  //   name: "Radio Group",
  //   slug: "radio-group",
  //   components: [
  //     { name: "oui-radio-group-ex" },
  //     { name: "oui-radio-group-ex-demo" },
  //     { name: "oui-radio-group-ex-demo-description" },
  //   ],
  // },
  // {
  //   name: "Search Field",
  //   slug: "search-field",
  //   components: [
  //     { name: "oui-search-field-ex" },
  //     { name: "oui-search-field-ex-demo" },
  //   ],
  // },
  // {
  //   name: "Select",
  //   slug: "select",
  //   components: [
  //     { name: "oui-select-demo" },
  //     { name: "oui-select-demo-multiple" },
  //     { name: "oui-select-ex" },
  //     { name: "oui-select-ex-demo" },
  //     { name: "oui-select-ex-demo-large-list" },
  //     { name: "oui-select-ex-demo-icon" },
  //     { name: "oui-select-ex-demo-disabled" },
  //     { name: "oui-select-ex-popover" },
  //   ],
  // },
  // {
  //   name: "Separator",
  //   slug: "separator",
  //   components: [{ name: "oui-separator-demo" }],
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
  //     { name: "oui-slider-ex" },
  //     { name: "oui-slider-ex-demo" },
  //     { name: "oui-slider-ex-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Switch",
  //   slug: "switch",
  //   components: [
  //     { name: "oui-switch-ex" },
  //     { name: "oui-switch-ex-demo" },
  //     { name: "oui-switch-ex-demo-blue" },
  //     { name: "oui-switch-ex-demo-description" },
  //     { name: "oui-switch-ex-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Table",
  //   slug: "table",
  //   components: [
  //     { name: "oui-table-demo" },
  //     { name: "oui-table-demo-action-menu" },
  //   ],
  // },
  // {
  //   name: "Tabs",
  //   slug: "tabs",
  //   components: [{ name: "oui-tabs-demo" }],
  // },
  // {
  //   name: "Text",
  //   slug: "text",
  //   components: [{ name: "oui-text-demo" }],
  // },
  // {
  //   name: "Text Area",
  //   slug: "text-area",
  //   components: [
  //     { name: "oui-text-area-demo" },
  //     { name: "oui-text-area-demo-text-field" },
  //     { name: "oui-text-area-demo-disabled" },
  //   ],
  // },
  // {
  //   name: "Text Field",
  //   slug: "text-field",
  //   components: [
  //     { name: "oui-text-field-demo" },
  //     { name: "oui-text-field-ex" },
  //     { name: "oui-text-field-ex-demo" },
  //     { name: "oui-text-field-ex-horizontal" },
  //     { name: "oui-text-field-ex-horizontal-demo" },
  //   ],
  // },
  // {
  //   name: "Toggle Button",
  //   slug: "toggle-button",
  //   components: [
  //     { name: "oui-toggle-button-demo" },
  //     { name: "oui-react-router-theme-toggle-button" },
  //   ],
  // },
  // {
  //   name: "Tooltip",
  //   slug: "tooltip",
  //   components: [
  //     { name: "oui-tooltip-demo" },
  //     { name: "oui-tooltip-ex" },
  //     { name: "oui-tooltip-ex-demo" },
  //   ],
  // },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
