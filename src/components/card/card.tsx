import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "gxg-card",
  styleUrl: "card.scss",
  shadow: true
})
export class Card {
  /**
   * The card box-shadow
   */
  @Prop({ reflect: true }) boxShadow: boxShadow = "xxs";

  /**
   * The background color
   */
  @Prop({ reflect: true }) background = "white";

  /**
   * The card padding (internal spacing)
   */
  @Prop({ reflect: true }) padding: padding = "xs";

  /**
   * The component min. height
   */
  @Prop() minHeight = "auto";

  /**
   * The component max. width
   */
  @Prop() maxWidth = "100%";

  render() {
    return (
      <Host
        class={{
          card: true
        }}
        style={{ maxWidth: this.maxWidth, minHeight: this.minHeight }}
      >
        <slot></slot>
      </Host>
    );
  }
}

export type boxShadow = "xxs" | "xs" | "s" | "m" | "l";

export type padding = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

export type background = "white" | "gray";
