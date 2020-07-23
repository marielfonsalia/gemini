import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "gxg-drag-box",
  styleUrl: "drag-box.scss",
  shadow: true
})
export class DragBox {
  /**
   * The padding (internal spacing)
   */
  @Prop({ reflect: true }) padding: Padding;

  render() {
    return (
      <Host>
        <div class="icon-container">
          <gxg-icon size="regular" type="drag"></gxg-icon>
        </div>
        <div class="content-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

export type Padding = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
