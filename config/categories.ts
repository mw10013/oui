export interface Category {
  slug: string;
  name: string;
  components: { name: string }[];
}

export const categories: Category[] = [
  {
    name: "Alert",
    slug: "alert",
    components: [
      { name: "oui-alert-ex-form" },
      { name: "oui-alert-ex-form-demo" },
    ],
  },
  {
    name: "Autocomplete",
    slug: "autocomplete",
    components: [
      { name: "oui-autocomplete-demo" },
      { name: "oui-autocomplete-demo-avatar" },
      { name: "oui-autocomplete-demo-searchable" },
    ],
  },
  {
    name: "Badge",
    slug: "badge",
    components: [{ name: "oui-badge-ex" }, { name: "oui-badge-ex-demo" }],
  },
  {
    name: "Base",
    slug: "base",
    components: [{ name: "oui-base" }],
  },
  {
    name: "Button",
    slug: "button",
    components: [
      { name: "oui-button" },
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
    name: "Card",
    slug: "card",
    components: [{ name: "oui-card-ex" }],
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    components: [
      { name: "oui-checkbox" },
      { name: "oui-checkbox-demo" },
      { name: "oui-checkbox-demo-blue" },
    ],
  },
  {
    name: "Checkbox Group",
    slug: "checkbox-group",
    components: [
      { name: "oui-checkbox-group" },
      { name: "oui-checkbox-group-demo" },
      { name: "oui-checkbox-group-demo-invalid" },
    ],
  },
  {
    name: "Combo Box",
    slug: "combo-box",
    components: [
      { name: "oui-combo-box" },
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
      { name: "oui-dialog" },
      { name: "oui-dialog-demo" },
      { name: "oui-dialog-ex" },
      { name: "oui-dialog-ex-demo" },
      { name: "oui-dialog-ex-demo-alert" },
      { name: "oui-dialog-ex-demo-scrollable-content" },
      { name: "oui-dialog-ex-demo-sticky-footer" },
      { name: "oui-dialog-ex-alert" },
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
      { name: "oui-disclosure" },
      { name: "oui-disclosure-demo" },
      { name: "oui-disclosure-demo-group" },
      { name: "oui-disclosure-demo-text" },
    ],
  },
  {
    name: "Field",
    slug: "field",
    components: [{ name: "oui-field" }, { name: "oui-field-demo-fieldset" }],
  },
  {
    name: "Form",
    slug: "form",
    components: [{ name: "oui-form-demo" }],
  },
  {
    name: "Group",
    slug: "group",
    components: [{ name: "oui-group" }, { name: "oui-group-demo" }],
  },
  {
    name: "Header",
    slug: "header",
    components: [{ name: "oui-header" }, { name: "oui-header-demo" }],
  },
  {
    name: "Heading",
    slug: "heading",
    components: [{ name: "oui-heading" }, { name: "oui-heading-demo" }],
  },
  {
    name: "Index",
    slug: "index",
    components: [{ name: "oui-index" }, { name: "oui-react-router-index" }],
  },
  {
    name: "Input",
    slug: "input",
    components: [
      { name: "oui-input" },
      { name: "oui-input-demo" },
      { name: "oui-input-demo-password" },
      { name: "oui-input-demo-disabled" },
    ],
  },
  {
    name: "Keyboard",
    slug: "keyboard",
    components: [{ name: "oui-keyboard" }, { name: "oui-keyboard-demo" }],
  },
  {
    name: "Label",
    slug: "label",
    components: [
      { name: "oui-label" },
      { name: "oui-label-demo" },
      { name: "oui-label-demo-disabled" },
    ],
  },
  {
    name: "Link",
    slug: "link",
    components: [
      { name: "oui-link" },
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
      { name: "oui-link-demo-icon" },
      { name: "oui-link-demo-login" },
    ],
  },
  {
    name: "List Box",
    slug: "list-box",
    components: [
      { name: "oui-list-box" },
      { name: "oui-list-box-demo" },
      { name: "oui-list-box-demo-multiple" },
      { name: "oui-list-box-ex-pagination" },
      { name: "oui-list-box-ex-pagination-demo" },
    ],
  },
  {
    name: "Menu",
    slug: "menu",
    components: [
      { name: "oui-menu" },
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
    components: [{ name: "oui-modal" }, { name: "oui-modal-ex-sheet" }],
  },
  {
    name: "Number Field",
    slug: "number-field",
    components: [
      { name: "oui-number-field" },
      { name: "oui-number-field-ex" },
      { name: "oui-number-field-ex-demo" },
    ],
  },
  {
    name: "Popover",
    slug: "popover",
    components: [{ name: "oui-popover" }, { name: "oui-popover-demo" }],
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    components: [
      { name: "oui-radio-group" },
      { name: "oui-radio-group-demo" },
      { name: "oui-radio-group-demo-green" },
    ],
  },
  {
    name: "React Router",
    slug: "react-router",
    components: [
      { name: "oui-react-router-error-boundary" },
      { name: "oui-react-router-provider" },
      { name: "oui-react-router-theme-toggle-button" },
      { name: "oui-on-submit-react-router" },
    ],
  },
  {
    name: "Search Field",
    slug: "search-field",
    components: [
      { name: "oui-search-field" },
      { name: "oui-search-field-demo" },
    ],
  },
  {
    name: "Select",
    slug: "select",
    components: [
      { name: "oui-select" },
      { name: "oui-select-demo" },
      { name: "oui-select-demo-multiple" },
      { name: "oui-select-demo-large-list" },
      { name: "oui-select-demo-icon" },
    ],
  },
  {
    name: "Separator",
    slug: "separator",
    components: [{ name: "oui-separator-demo" }],
  },
  {
    name: "Sidebar",
    slug: "sidebar",
    components: [{ name: "oui-sidebar-ex" }],
  },
  {
    name: "Slider",
    slug: "slider",
    components: [{ name: "oui-slider" }, { name: "oui-slider-demo" }],
  },
  {
    name: "Switch",
    slug: "switch",
    components: [{ name: "oui-switch" }, { name: "oui-switch-demo" }],
  },
  {
    name: "Table",
    slug: "table",
    components: [
      { name: "oui-table" },
      { name: "oui-table-demo" },
      { name: "oui-table-demo-action-menu" },
    ],
  },
  {
    name: "Tabs",
    slug: "tabs",
    components: [{ name: "oui-tabs" }, { name: "oui-tabs-demo" }],
  },
  {
    name: "Text",
    slug: "text",
    components: [{ name: "oui-text" }, { name: "oui-text-demo" }],
  },
  {
    name: "Text Area",
    slug: "text-area",
    components: [{ name: "oui-text-area" }, { name: "oui-text-area-demo" }],
  },
  {
    name: "Text Field",
    slug: "text-field",
    components: [
      { name: "oui-text-field" },
      { name: "oui-text-field-demo" },
      { name: "oui-text-field-demo-invalid" },
    ],
  },
  {
    name: "Toggle Button",
    slug: "toggle-button",
    components: [
      { name: "oui-toggle-button" },
      { name: "oui-toggle-button-demo" },
    ],
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    components: [{ name: "oui-tooltip" }, { name: "oui-tooltip-demo" }],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
