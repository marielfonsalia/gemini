import { Component, Prop, State, h, Host } from "@stencil/core";

@Component({
  tag: "gxg-toggle",
  styleUrl: "toggle.scss",
  shadow: true
})
export class Toggle {
  /*********************************
  PROPERTIES & STATE
  *********************************/

  /**
   * The state of the toggle. Whether is disabled or not.
   */
  @Prop({ reflect: true }) disabled = false;

  @State() focus = false;

  /**
   * Inline-flex display
   */
  @Prop() inlineFlex = false;

  /**
   * The label
   */
  @Prop() label = "Label";

  /**
   * If the toggle is active or not
   */
  @Prop({ reflect: true }) on = false;

  /*********************************
  METHODS
  *********************************/

  onKeyUp(e) {
    if (e.which == 13) {
      //"enter" key was pressed
      this.switchToggle();
    } else if (e.which == 9) {
      //"tab" key was pressed
      this.focus = true;
    }
  }
  onKeyDown(e) {
    if (e.which == 9) {
      //"tab" key was pressed
      this.focus = false;
    }
  }
  switchToggle() {
    if (this.disabled !== true) {
      if (this.on === true) {
        this.on = false;
      } else {
        this.on = true;
      }
    }
  }

  render() {
    return (
      <Host
        class={{
          toggle: true,
          "on-focus": this.focus === true
        }}
        onClick={this.switchToggle}
        onKeyup={this.onKeyUp.bind(this)}
        onKeydown={this.onKeyDown.bind(this)}
      >
        <div class="toggle__container">
          <span class="toggle__container__knob"></span>
        </div>
        <span class="toggle__label">{this.label}</span>
      </Host>
    );
  }
}
