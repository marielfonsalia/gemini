/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertType } from "./components/alert/alert";
import { ButtonType } from "./components/button/button";
import { IconType } from "./components/icon/icon";

export namespace Components {
  interface GxgAlert {
    active: boolean;
    alertTitle: string;
    something: string;
    type: AlertType;
  }
  interface GxgButton {
    /**
     * The state of the button. Whether is disabled or not. Possible values: false, true
     */
    disabled: boolean;
    /**
     * The kind of button Possible values: primary-text-only, primary-text-icon, primary-icon-only, secondary-text-only, secondary-icon-only, outlined
     */
    type: ButtonType;
  }
  interface GxgButtonGroup {
    /**
     * The id of the button that you would like to show active initially
     */
    SelectedButtonId: string;
    /**
     * The main title that will show up above the buttons group
     */
    buttonGroupTitle: string;
    /**
     * The main title alignment
     */
    titleAlignment: "left" | "center" | "right";
  }
  interface GxgIcon {
    /**
     * The color of the icon.
     */
    color: "onbackground" | "negative" | "error" | "success" | "warning";
    /**
     * If enabled, the icon will be loaded lazily when it's visible in the viewport.
     */
    lazy: boolean;
    /**
     * The size of the icon. Possible values: regular, small.
     */
    size: "regular" | "small" | "tiny";
    /**
     * The type of icon. Possible values: each of the icons in /assets. The value is always the name of the svg file without the "gxg-icon-" prefix. Example: the value for the "gxg-icon-add.svg" file is "add".
     */
    type: IconType;
  }
}

declare global {
  interface HTMLGxgAlertElement
    extends Components.GxgAlert,
      HTMLStencilElement {}
  var HTMLGxgAlertElement: {
    prototype: HTMLGxgAlertElement;
    new (): HTMLGxgAlertElement;
  };

  interface HTMLGxgButtonElement
    extends Components.GxgButton,
      HTMLStencilElement {}
  var HTMLGxgButtonElement: {
    prototype: HTMLGxgButtonElement;
    new (): HTMLGxgButtonElement;
  };

  interface HTMLGxgButtonGroupElement
    extends Components.GxgButtonGroup,
      HTMLStencilElement {}
  var HTMLGxgButtonGroupElement: {
    prototype: HTMLGxgButtonGroupElement;
    new (): HTMLGxgButtonGroupElement;
  };

  interface HTMLGxgIconElement extends Components.GxgIcon, HTMLStencilElement {}
  var HTMLGxgIconElement: {
    prototype: HTMLGxgIconElement;
    new (): HTMLGxgIconElement;
  };
  interface HTMLElementTagNameMap {
    "gxg-alert": HTMLGxgAlertElement;
    "gxg-button": HTMLGxgButtonElement;
    "gxg-button-group": HTMLGxgButtonGroupElement;
    "gxg-icon": HTMLGxgIconElement;
  }
}

declare namespace LocalJSX {
  interface GxgAlert {
    active?: boolean;
    alertTitle?: string;
    something?: string;
    type?: AlertType;
  }
  interface GxgButton {
    /**
     * The state of the button. Whether is disabled or not. Possible values: false, true
     */
    disabled?: boolean;
    /**
     * The kind of button Possible values: primary-text-only, primary-text-icon, primary-icon-only, secondary-text-only, secondary-icon-only, outlined
     */
    type?: ButtonType;
  }
  interface GxgButtonGroup {
    /**
     * The id of the button that you would like to show active initially
     */
    SelectedButtonId?: string;
    /**
     * The main title that will show up above the buttons group
     */
    buttonGroupTitle?: string;
    /**
     * The main title alignment
     */
    titleAlignment?: "left" | "center" | "right";
  }
  interface GxgIcon {
    /**
     * The color of the icon.
     */
    color?: "onbackground" | "negative" | "error" | "success" | "warning";
    /**
     * If enabled, the icon will be loaded lazily when it's visible in the viewport.
     */
    lazy?: boolean;
    /**
     * The size of the icon. Possible values: regular, small.
     */
    size?: "regular" | "small" | "tiny";
    /**
     * The type of icon. Possible values: each of the icons in /assets. The value is always the name of the svg file without the "gxg-icon-" prefix. Example: the value for the "gxg-icon-add.svg" file is "add".
     */
    type?: IconType;
  }

  interface IntrinsicElements {
    "gxg-alert": GxgAlert;
    "gxg-button": GxgButton;
    "gxg-button-group": GxgButtonGroup;
    "gxg-icon": GxgIcon;
  }
}

export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "gxg-alert": LocalJSX.GxgAlert &
        JSXBase.HTMLAttributes<HTMLGxgAlertElement>;
      "gxg-button": LocalJSX.GxgButton &
        JSXBase.HTMLAttributes<HTMLGxgButtonElement>;
      "gxg-button-group": LocalJSX.GxgButtonGroup &
        JSXBase.HTMLAttributes<HTMLGxgButtonGroupElement>;
      "gxg-icon": LocalJSX.GxgIcon & JSXBase.HTMLAttributes<HTMLGxgIconElement>;
    }
  }
}
