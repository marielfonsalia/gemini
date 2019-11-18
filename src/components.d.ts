/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface GxgButton {
    /**
    * The state of the button. Whether is disabled or not. Possible values: false, true
    */
    'disabled': boolean;
    /**
    * The kind of button Possible values: primary, secondary, text-only, icon-only
    */
    'type': string;
  }
  interface GxgIcon {
    'color': string;
    /**
    * The type of icon Possible values: each of the icons in src/assets/icons. The value is always the name of the svg file without the "gxg-icon-" prefix. Example: the value for the "gxg-icon-add.svg" file is "add".
    */
    'type': string;
  }
}

declare global {


  interface HTMLGxgButtonElement extends Components.GxgButton, HTMLStencilElement {}
  var HTMLGxgButtonElement: {
    prototype: HTMLGxgButtonElement;
    new (): HTMLGxgButtonElement;
  };

  interface HTMLGxgIconElement extends Components.GxgIcon, HTMLStencilElement {}
  var HTMLGxgIconElement: {
    prototype: HTMLGxgIconElement;
    new (): HTMLGxgIconElement;
  };
  interface HTMLElementTagNameMap {
    'gxg-button': HTMLGxgButtonElement;
    'gxg-icon': HTMLGxgIconElement;
  }
}

declare namespace LocalJSX {
  interface GxgButton {
    /**
    * The state of the button. Whether is disabled or not. Possible values: false, true
    */
    'disabled'?: boolean;
    /**
    * The kind of button Possible values: primary, secondary, text-only, icon-only
    */
    'type'?: string;
  }
  interface GxgIcon {
    'color'?: string;
    /**
    * The type of icon Possible values: each of the icons in src/assets/icons. The value is always the name of the svg file without the "gxg-icon-" prefix. Example: the value for the "gxg-icon-add.svg" file is "add".
    */
    'type'?: string;
  }

  interface IntrinsicElements {
    'gxg-button': GxgButton;
    'gxg-icon': GxgIcon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'gxg-button': LocalJSX.GxgButton & JSXBase.HTMLAttributes<HTMLGxgButtonElement>;
      'gxg-icon': LocalJSX.GxgIcon & JSXBase.HTMLAttributes<HTMLGxgIconElement>;
    }
  }
}


