import { storiesOf } from "@storybook/html";
import readme from "./readme.md";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  radios
} from "@storybook/addon-knobs";

const stories = storiesOf("Color Picker", module);
stories.addDecorator(withKnobs);
stories.addParameters({ notes: readme });
stories.add("Color Picker", () => {
  return `<gxg-color-picker></gxg-color-picker>`;
});
