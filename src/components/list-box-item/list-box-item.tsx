import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import { Color } from "../icon/icon";
import state from "../store";

@Component({
  tag: "gxg-list-box-item",
  styleUrl: "list-box-item.scss",
  shadow: true,
})
export class GxgListboxItem {
  @Element() el: HTMLElement;
  /**
   * Any icon that belongs to Gemini icon library: https://gx-gemini.netlify.app/?path=/story/icons
   */
  @Prop() icon: string = undefined;

  /**
   * (This event is for internal use.)
   */
  @Event() itemClicked: EventEmitter;

  /**
   * (This event is for internal use.)
   */
  @Event() KeyPressed: EventEmitter;

  /**
   * The item value. If value is not provided, the value will be the item innerHTML.
   */
  @Prop() value: any = undefined;

  /**
   * (This prop is for internal use).
   */
  @Prop() iconColor: Color = "auto";

  @State() checkboxes = false;

  componentWillLoad() {
    const listbox = this.el.parentElement;
    const listboxCheckboxes = listbox.getAttribute("checkboxes");
    if (listboxCheckboxes !== null) {
      this.checkboxes = true;
    }
  }

  itemClickedFunc(e) {
    const index = this.el.getAttribute("index");
    this.itemClicked.emit({
      index: parseInt(index, 10),
      crtlKey: e.ctrlKey,
      cmdKey: e.metaKey,
      shiftKey: e.shiftKey,
    });
  }

  onKeyDown(e) {
    if (e.code === "ArrowDown" || e.code === "ArrowUp" || e.code === "Enter") {
      e.preventDefault();
      const index = this.el.getAttribute("index");
      this.KeyPressed.emit({
        index: parseInt(index, 10),
        crtlKey: e.ctrlKey,
        cmdKey: e.metaKey,
        shiftKey: e.shiftKey,
        eCode: e.code,
      });
    }
  }

  onMouseOver() {
    this.iconColor = "negative";
  }

  onMouseOut() {
    const itemIsSelected = this.el.classList.contains("selected");
    if (!itemIsSelected) {
      this.iconColor = "auto";
    }
  }

  render() {
    return (
      <Host
        class={{
          "has-icon": this.icon !== undefined,
          "no-checkbox": !this.checkboxes,
          large: state.large,
        }}
        onClick={this.itemClickedFunc.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
      >
        <div class="container">
          <slot name="checkbox"></slot>
          {this.icon !== undefined ? (
            <gxg-icon
              class="icon"
              color={this.iconColor}
              size="regular"
              type={this.icon}
            ></gxg-icon>
          ) : null}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
