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
const label = "Icon";
const options = {
  Add: "add",
  "Arrow Down": "arrowDown",
  Close: "close",
  "Color Picker": "colorPicker",
  Duplicate: "duplicate",
  Edit: "edit",
  Magic: "magic",
  More: "more",
  Remove: "remove",
  Triangle: "triangle"
};
const defaultValue = options.Add;

/*Disabled Knob*/
const labelDisabled = "Disabled";
const defaultValueDisabled = false;

/*************
STORIES
*************/
const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);
// storiesOf('Button', module)
stories
  .add(
    "Primary Text Only",
    () => `
        <gxg-button type="primary-text-only" disabled=${boolean(
          labelDisabled,
          defaultValueDisabled
        )}> ${text("Button Label", "Button")}</gxg-button>
        `,
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    "Primary Text + Icon",
    () => `
        <gxg-button type="primary-text-icon" disabled=${boolean(
          labelDisabled,
          defaultValueDisabled
        )}><gxg-icon slot="icon" type="${select(
      label,
      options,
      defaultValue
    )}"></gxg-icon
        >${text("Button Label", "Button")}</gxg-button>
        `,
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    "Primary Icon Only",
    () => `
        <gxg-button type="primary-icon-only" disabled=${boolean(
          labelDisabled,
          defaultValueDisabled
        )}><gxg-icon slot="icon" type="${select(
      label,
      options,
      defaultValue
    )}"></gxg-icon
            ></gxg-button>
        `,
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    "Secondary Text Only",
    () => `
        <gxg-button type="secondary-text-only" disabled=${boolean(
          labelDisabled,
          defaultValueDisabled
        )}>${text("Button Label", "Button")}</gxg-button>
        `,
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    "Secondary Icon Only",
    () => `
        <gxg-button type="secondary-icon-only" disabled=${boolean(
          labelDisabled,
          defaultValueDisabled
        )}><gxg-icon slot="icon" type="${select(
      label,
      options,
      defaultValue
    )}"></gxg-icon
            ></gxg-button>
        `,
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    "Outlined",
    () => `
        <gxg-button type="outlined" disabled=${boolean(
          labelDisabled,
          defaultValueDisabled
        )}>${text("Button Label", "Button")}</gxg-button>
        `,
    {
      notes: {
        markdown: readme
      }
    }
  );
