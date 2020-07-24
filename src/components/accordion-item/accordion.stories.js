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

const stories = storiesOf("Other/Accordion", module);
stories.addDecorator(withKnobs);
stories.addParameters({ notes: readme });
stories
  .add("Classical", () => {
    //All items disabled
    const labelAllDisabled =
      "All items disabled (by setting 'disabled' on the accordion-container component)";
    const defaultValueAllDisabled = false;
    const valueAllDisabled = boolean(labelAllDisabled, defaultValueAllDisabled);

    //Content
    const labelValueContent = "First accordion content";
    const defaultValueContent =
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss";
    const valueContent = text(labelValueContent, defaultValueContent);

    //One item disabled
    const labelSingleItemDisabled =
      "Item Disabled (only the first accordion for this example)";
    const defaultValueSingleItemDisabled = false;
    const valueSingleItemDisabled = boolean(
      labelSingleItemDisabled,
      defaultValueSingleItemDisabled
    );

    //Initial State
    const labelInitialState =
      "Item opened by default (only for the first accordion in this example)";
    const defaultValueInitialState = false;
    const valueInitialState = boolean(
      labelInitialState,
      defaultValueInitialState
    );

    //Max Width
    const labelMaxWidth = "Max Width (default: 100%)";
    const defaultValueMaxWidth = "100%";
    const valueMaxWidth = text(labelMaxWidth, defaultValueMaxWidth);

    //Padding
    const labelPadding = "Padding";
    const optionsPadding = {
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      xxxl: "xxxl"
    };
    const defaultValuePadding = "s";

    //Single Item Open
    const labelSingleItemOpen =
      "Single Item Open (only one accordion at a time can be open at the same time)";
    const defaultValueSingleItemOpen = false;
    const valueSingleItemOpen = boolean(
      labelSingleItemOpen,
      defaultValueSingleItemOpen
    );

    //Title
    const labelTitle = "Title";
    const defaultValueTitle = "Dr. Seuss";
    const valueTitle = text(labelTitle, defaultValueTitle);

    function singleItemOpen() {
      if (valueSingleItemOpen) {
        return "single-item-open";
      } else {
        return "";
      }
    }

    function allDisabled() {
      if (valueAllDisabled) {
        return "disabled";
      }
    }

    function itemOpen() {
      if (valueInitialState) {
        return "open";
      }
    }

    function singleDisabled() {
      if (valueSingleItemDisabled) {
        return "disabled";
      }
    }

    return `<style>#root {width: 700px; display:flex; justify-content: center;}</style>
  <gxg-accordion ${allDisabled()} padding="${select(
      labelPadding,
      optionsPadding,
      defaultValuePadding
    )}" ${singleItemOpen()} mode="classical"  max-width="${valueMaxWidth}">
    <gxg-accordion-item item-id="tab 1" ${singleDisabled()} status="${itemOpen()}"><h2 slot="title">${valueTitle}</h2> ${valueContent}</gxg-accordion-item>
    <gxg-accordion-item item-id="tab 2"><h2 slot="title">J.K. Rowling</h2> “If you want to know what a man's like, take a good look at how he
    treats his inferiors, not his equals.” ― J.K. Rowling, Harry Potter and
    the Goblet of Fire</gxg-accordion-item> 
    <gxg-accordion-item item-id="tab 3"><h2 slot="title">Maya Angelou</h2>“I've learned that people will forget what you said, people will forget
    what you did, but people will never forget how you made them feel.” ―
    Maya Angelou</gxg-accordion-item>
  </gxg-accordion>`;
  })
  .add("Slim", () => {
    //All items disabled
    const labelAllDisabled =
      "All items disabled (by setting 'disabled' on the accordion-container component)";
    const defaultValueAllDisabled = false;
    const valueAllDisabled = boolean(labelAllDisabled, defaultValueAllDisabled);

    //Content
    const labelValueContent = "First accordion content";
    const defaultValueContent =
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss";
    const valueContent = text(labelValueContent, defaultValueContent);

    //One item disabled
    const labelSingleItemDisabled =
      "Item Disabled (only the first accordion for this example)";
    const defaultValueSingleItemDisabled = false;
    const valueSingleItemDisabled = boolean(
      labelSingleItemDisabled,
      defaultValueSingleItemDisabled
    );

    //Initial State
    const labelInitialState =
      "Item open by default (only for the first accordion in this example)";
    const defaultValueInitialState = false;
    const valueInitialState = boolean(
      labelInitialState,
      defaultValueInitialState
    );

    //Max Width
    const labelMaxWidth = "Max Width (default: 100%)";
    const defaultValueMaxWidth = "100%";
    const valueMaxWidth = text(labelMaxWidth, defaultValueMaxWidth);

    //Padding
    const labelPadding = "Padding";
    const optionsPadding = {
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      xxxl: "xxxl"
    };
    const defaultValuePadding = "s";

    //Single Item Open
    const labelSingleItemOpen =
      "Single Item Open (only one accordion at a time can be open at the same time)";
    const defaultValueSingleItemOpen = false;
    const valueSingleItemOpen = boolean(
      labelSingleItemOpen,
      defaultValueSingleItemOpen
    );

    //Title
    const labelTitle = "Title";
    const defaultValueTitle = "Dr. Seuss";
    const valueTitle = text(labelTitle, defaultValueTitle);

    function initialState() {
      if (valueInitialState === true) {
        return "open";
      }
    }

    function singleItemOpen() {
      if (valueSingleItemOpen) {
        return "single-item-open";
      } else {
        return "";
      }
    }

    function allDisabled() {
      if (valueAllDisabled) {
        return "disabled";
      }
    }

    function singleDisabled() {
      if (valueSingleItemDisabled) {
        return "disabled";
      }
    }

    return `<style>#root {width: 700px; display:flex; justify-content: center;}</style>
  <gxg-accordion ${allDisabled()} padding="${select(
      labelPadding,
      optionsPadding,
      defaultValuePadding
    )}" ${singleItemOpen()} mode="slim" max-width="${valueMaxWidth}">
    <gxg-accordion-item  status="${initialState()}" item-id="tab 1" ${singleDisabled()}><h2 slot="title">${valueTitle}</h2>${valueContent}</gxg-accordion-item>
    <gxg-accordion-item item-id="tab 2"><h2 slot="title">J.K. Rowling</h2>“If you want to know what a man's like, take a good look at how he
    treats his inferiors, not his equals.” ― J.K. Rowling, Harry Potter and
    the Goblet of Fire</gxg-accordion-item> 
    <gxg-accordion-item item-id="tab 3"><h2 slot="title">Maya Angelou</h2>“I've learned that people will forget what you said, people will forget
    what you did, but people will never forget how you made them feel.” ―
    Maya Angelou</gxg-accordion-item>
  </gxg-accordion>`;
  })
  .add("Boxed", () => {
    //All items disabled
    const labelAllDisabled =
      "All items disabled (by setting 'disabled' on the accordion-container component)";
    const defaultValueAllDisabled = false;
    const valueAllDisabled = boolean(labelAllDisabled, defaultValueAllDisabled);

    //Content
    const labelValueContent = "First accordion content";
    const defaultValueContent =
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss";
    const valueContent = text(labelValueContent, defaultValueContent);

    //One item disabled
    const labelSingleItemDisabled =
      "Item Disabled (only the first accordion for this example)";
    const defaultValueSingleItemDisabled = false;
    const valueSingleItemDisabled = boolean(
      labelSingleItemDisabled,
      defaultValueSingleItemDisabled
    );

    //Initial State
    const labelInitialState =
      "Item opened by default (only for the first accordion in this example)";
    const defaultValueInitialState = false;
    const valueInitialState = boolean(
      labelInitialState,
      defaultValueInitialState
    );

    //Max Width
    const labelMaxWidth = "Max Width (default: 100%)";
    const defaultValueMaxWidth = "100%";
    const valueMaxWidth = text(labelMaxWidth, defaultValueMaxWidth);

    //Padding
    const labelPadding = "Padding";
    const optionsPadding = {
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      xxxl: "xxxl"
    };
    const defaultValuePadding = "s";

    //Single Item Open
    const labelSingleItemOpen =
      "Single Item Open (only one accordion at a time can be open at the same time)";
    const defaultValueSingleItemOpen = false;

    const valueSingleItemOpen = boolean(
      labelSingleItemOpen,
      defaultValueSingleItemOpen
    );

    //Title
    const labelTitle = "Title";
    const defaultValueTitle = "Dr. Seuss";
    const valueTitle = text(labelTitle, defaultValueTitle);

    function initialState() {
      if (valueInitialState === true) {
        return "open";
      }
    }

    function singleItemOpen() {
      if (valueSingleItemOpen) {
        return "single-item-open";
      } else {
        return "";
      }
    }

    function allDisabled() {
      if (valueAllDisabled) {
        return "disabled";
      }
    }

    function singleDisabled() {
      if (valueSingleItemDisabled) {
        return "disabled";
      }
    }

    return `<style>#root {width: 700px; display:flex; justify-content: center;}</style>
    <gxg-accordion ${allDisabled()} padding="${select(
      labelPadding,
      optionsPadding,
      defaultValuePadding
    )}" ${singleItemOpen()} mode="boxed" max-width="${valueMaxWidth}">
      <gxg-accordion-item status="${initialState()}" item-id="tab 1" ${singleDisabled()}><h2 slot="title">${valueTitle}</h2>${valueContent}</gxg-accordion-item>
      <gxg-accordion-item item-id="tab 2"><h2 slot="title">J.K. Rowling</h2>“If you want to know what a man's like, take a good look at how he
      treats his inferiors, not his equals.” ― J.K. Rowling, Harry Potter and
      the Goblet of Fire</gxg-accordion-item> 
      <gxg-accordion-item item-id="tab 3"><h2 slot="title">Maya Angelou</h2>“I've learned that people will forget what you said, people will forget
      what you did, but people will never forget how you made them feel.” ―
      Maya Angelou</gxg-accordion-item>
    </gxg-accordion>`;
  })
  .add("Classcial nested", () => {
    return `<style>#root {width: 700px; display:flex; justify-content: center;}</style>
    <gxg-accordion mode="classical">
      <gxg-accordion-item item-id="fruits">
      <h2 slot="title">fruits</h2>
        <gxg-accordion mode="slim">
          <gxg-accordion-item item-id="apple">
          <h2 slot="title">apple</h2>
            An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.
          </gxg-accordion-item>
          <gxg-accordion-item item-id="banana">
          <h2 slot="title">banana</h2>
            A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. 
          </gxg-accordion-item>
          <gxg-accordion-item item-id="mango">
          <h2 slot="title">mango</h2>
            A mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera.
          </gxg-accordion-item>
      </gxg-accordion>
      </gxg-accordion-item>
      <gxg-accordion-item item-id="vegetables">
      <h2 slot="title">vegetables</h2>
        <gxg-accordion mode="slim">
        <gxg-accordion-item item-id="lettuce">
      <h2 slot="title">lettuce</h2>
          Lettuce (Lactuca sativa) is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.
        </gxg-accordion-item>
        <gxg-accordion-item item-id="carrot">
          <h2 slot="title">carrot</h2>
          The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. 
        </gxg-accordion-item>
        <gxg-accordion-item item-id="onion">
        <h2 slot="title">onion</h2>
          The onion also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.
        </gxg-accordion-item>
        </gxg-accordion>
      </gxg-accordion-item>
  </gxg-accordion>`;
  })
  .add("Boxed nested", () => {
    return `<style>#root {width: 700px; display:flex; justify-content: center;}</style>
    <gxg-accordion mode="boxed">
      <gxg-accordion-item item-id="fruits">
      <h2 slot="title">fruits</h2>
        <gxg-accordion mode="slim">
          <gxg-accordion-item item-id="apple">
            <h2 slot="title">apple</h2>
            An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.
          </gxg-accordion-item>
          <gxg-accordion-item item-id="banana">
            <h2 slot="title">banana</h2>
            A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. 
          </gxg-accordion-item>
          <gxg-accordion-item item-id="mango">
            <h2 slot="title">mango</h2>
            A mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera.
          </gxg-accordion-item>
      </gxg-accordion>
      </gxg-accordion-item>
      <gxg-accordion-item item-id="vegetables">
        <h2 slot="title">vegetables</h2>
        <gxg-accordion mode="slim">
        <gxg-accordion-item item-id="lettuce">
          <h2 slot="title">lettuce</h2>
          Lettuce (Lactuca sativa) is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.
        </gxg-accordion-item>
        <gxg-accordion-item item-title="carrot" item-id="carrot">
          <h2 slot="title">carrot</h2>
          The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. 
        </gxg-accordion-item>
        <gxg-accordion-item item-id="onion">
          <h2 slot="title">onion</h2>
          The onion also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.
        </gxg-accordion-item>
        </gxg-accordion>
      </gxg-accordion-item>
  </gxg-accordion>`;
  });
