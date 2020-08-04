import { storiesOf } from "@storybook/html";
import readme from "./readme.md";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

/*************
KNOBS
*************/

/*Icons Knob*/
const label = "Icons/Color";
const options = {
  alwaysblack: "alwaysblack",
  disabled: "disabled",
  error: "error",
  "negative (white)": "negative",
  onbackground: "onbackground",
  primary: "primary",
  success: "success",
  warning: "warning"
};

// always: "onbackground",
// "negative (white)": "negative",
// error: "error",
// warning: "warning",
// success: "success"

const defaultValue = options.default;

/*Disabled Knob*/
const labelDisabled = "Disabled";
const defaultValueDisabled = false;

/*************
STORIES
*************/

const arrayIconsNames = [
  { name: "add", description: "this is some description for add" },
  {
    name: "add-circle",
    description: "this is some description for add circle"
  },
  { name: "arrow-down", description: "this is some description for arrow-down" }
];

function iconsSet(size) {
  return arrayIconsNames
    .map((iconType, index) => {
      return `
      <tr>
        <td>${iconType.name}</td>
        <td>
          <gxg-icon size="${size}" type="${iconType}" color="${select(
        label,
        options,
        defaultValue
      )}"></gxg-icon></tr></td>
      <td>${iconType.description}</td>`;
    })
    .join("");
}
const stories = storiesOf("Icons/Icons", module);
stories.addDecorator(withKnobs);
// storiesOf('Button', module)
stories.add("category one", () => iconsSet("regular"), {
  notes: {
    markdown: readme
  }
});
