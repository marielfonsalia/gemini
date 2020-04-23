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

const stories = storiesOf("Toggle", module);
stories.addDecorator(withKnobs);
stories.addParameters({ notes: readme });
stories.add("Toggle", () => {
  //Display
  const labelDisplay = "Display";
  const optionsDisplay = {
    flex: "flex",
    "inline-flex": "inline-flex"
  };
  const defaultValueDisplay = "flex";
  const valueDisplay = radios(
    labelDisplay,
    optionsDisplay,
    defaultValueDisplay
  );

  //Status
  const labelDisabled = "Disable Red";
  const defaultValueDisabled = false;

  const valueDisabled = boolean(labelDisabled, defaultValueDisabled);

  return `
    <style>
    .bulb {
      width:10px;
      height:10px;
      display:inline-block;
      background:black;
      border-radius:50%;
    }
    .bulbs-container {
      width: 60px;
      padding-bottom: 40px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .red {
      background-color: #690000;
    }
    .red.on {
      background-color: red;
    }
    .pink {
      background-color: #8c4854;
    }
    .pink.on {
      background-color: pink;
    }
    .purple {
      background-color: #4e164e;
    }
    .purple.on {
      background-color: #bf02bf;
    }
    </style>
    <div class="bulbs-container">
      <span class="bulb red" id="bulb-red">
      </span><span class="bulb pink" id="bulb-pink"></span>
      <span class="bulb purple" id="bulb-purple"></span>
    </div>
    <gxg-toggle ${valueDisplay} disabled=${valueDisabled} id="toggle-red" style="margin-bottom:20px;" label="Red" onClick="(function(){
      let toggle = document.getElementById('toggle-red');
      let bulb = document.getElementById('bulb-red');
      if(toggle.hasAttribute('on')){
        bulb.classList.remove('on');
      } else {
        bulb.classList.add('on');
      }
      return false;
    })();return false;"></gxg-toggle>

    <gxg-toggle ${valueDisplay} id="toggle-pink" style="margin-bottom:20px;" label="Pink" onClick="(function(){
      let toggle = document.getElementById('toggle-pink');
      let bulb = document.getElementById('bulb-pink');
      if(toggle.hasAttribute('on')){
        bulb.classList.remove('on');
      } else {
        bulb.classList.add('on');
      }
      return false;
    })();return false;"></gxg-toggle>

    <gxg-toggle ${valueDisplay} id="toggle-purple" style="margin-bottom:20px;" label="Purple" onClick="(function(){
      let toggle = document.getElementById('toggle-purple');
      let bulb = document.getElementById('bulb-purple');
      if(toggle.hasAttribute('on')){
        bulb.classList.remove('on');
      } else {
        bulb.classList.add('on');
      }
      return false;
    })();return false;"></gxg-toggle>`;
});
