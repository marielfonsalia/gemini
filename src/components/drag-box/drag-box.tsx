import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "gxg-drag-box",
  styleUrl: "drag-box.scss",
  shadow: true
})
export class DragBox {
  /**
   * The presence of this attribute makes this box active
   */
  @Prop({ reflect: true }) active = false;

  /**
   * The padding (internal spacing)
   */
  @Prop({ reflect: true }) padding: Padding;

  /**
   * The title
   */
  @Prop() title: string;

  clickedHandler() {
    this.active = true;
  }

  render() {
    return (
      <Host onClick={this.clickedHandler.bind(this)}>
        <div class="drag-icon-container">
          <gxg-icon size="regular" type="drag"></gxg-icon>
        </div>
        <div class="container-content">
          {this.title !== undefined ? (
            <span class="container-content__title">{this.title}</span>
          ) : null}
          <slot></slot>
        </div>
        <div class="delete-icon-container">
          <gxg-icon size="regular" type="deleted"></gxg-icon>
        </div>
      </Host>
    );
  }
}

export type Padding = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
