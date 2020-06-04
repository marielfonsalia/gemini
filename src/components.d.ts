/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { modeType } from "./components/accordion/accordion";
import {
  modeType as modeType1,
  statusType
} from "./components/accordion-item/accordion-item";
import { ButtonType } from "./components/button/button";
import { TitleAlignment } from "./components/button-group/button-group";
import { ShadowType } from "./components/card/card";
import { MessageType } from "./components/form-message/form-message";
import { IconType } from "./components/icon/icon";
import { IconPositionType } from "./components/form-text/form-text";
import { Color, IconType as IconType1, Size } from "./components/icon/icon";
import { footerAlignmentType } from "./components/modal/modal";
import { SizeType } from "./components/toggle/toggle";
export namespace Components {
  interface GxgAccordion {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled: boolean;
    /**
     * The aesthetical mode
     */
    mode: modeType;
    /**
     * Wether only one accordion can be open at the same time or not.
     */
    singleItemOpen: boolean;
  }
  interface GxgAccordionItem {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled: boolean;
    /**
     * The toggle id
     */
    itemId: string;
    /**
     * The toggle label
     */
    itemTitle: string;
    /**
     * The aesthetical mode
     */
    mode: modeType;
    /**
     * The toggle state
     */
    status: statusType;
  }
  interface GxgBox {
    height: string;
    /**
     * The card box-shadow value possible values: from 1 to 8
     */
    shadow: number;
    width: string;
  }
  interface GxgButton {
    /**
     * The state of the button. Whether is disabled or not.
     */
    disabled: boolean;
    /**
     * The kind of button
     */
    type: ButtonType;
  }
  interface GxgButtonGroup {
    /**
     * The title that will show up above the buttons group
     */
    buttonGroupTitle: string;
    /**
     * The id of the button that you would like to show active by default
     */
    defaultSelectedBtnId: string;
    /**
     * Wether the button group is disabled or not.
     */
    disabled: boolean;
    /**
     * The main title alignment
     */
    titleAlignment: TitleAlignment;
  }
  interface GxgCard {
    /**
     * The card box-shadow value possible values: from 1 to 8
     */
    shadow: ShadowType;
    width: string;
  }
  interface GxgColorPicker {
    cardTitle: string;
    value: string;
  }
  interface GxgDatePicker {
    /**
     * always show
     */
    alwaysShow: boolean;
    /**
     * initial date
     */
    defaultDate: string;
    /**
     * max date
     */
    maxDate: string;
    /**
     * min date
     */
    minDate: string;
    /**
     * no weekends
     */
    noWeekends: boolean;
    /**
     * input width
     */
    width: string;
  }
  interface GxgFormCheckbox {
    /**
     * Checkbox id
     */
    checkboxId: string;
    /**
     * Checkbox checked
     */
    checked: boolean;
    /**
     * Checkbox disabled
     */
    disabled: boolean;
    /**
     * Checkbox label
     */
    label: string;
    /**
     * Checkbox name
     */
    name: string;
    /**
     * Checkbox value
     */
    value: string;
  }
  interface GxgFormMessage {
    /**
     * The kind of message Possible values: error, warning
     */
    type: MessageType;
  }
  interface GxgFormRadio {
    /**
     * Radio id
     */
    RadioId: string;
    /**
     * Radio selected
     */
    checked: boolean;
    /**
     * Radio disabled
     */
    disabled: boolean;
    /**
     * Radio label
     */
    label: string;
    /**
     * Radio name
     */
    name: string;
    /**
     * Radio value
     */
    value: string;
  }
  interface GxgFormRadioWrapper {
    /**
     * Selected Radio id
     */
    RadioId: string;
    /**
     * Selected Radio value
     */
    RadioValue: string;
    /**
     * Inline-flex display
     */
    inlineFlex: boolean;
  }
  interface GxgFormSelect {
    /**
     * If select is disabled
     */
    disabled: boolean;
    /**
     * If select has errors
     */
    error: boolean;
    /**
     * If select is full width
     */
    fullWidth: boolean;
    /**
     * The select label
     */
    label: string;
    /**
     * The maximum number of visible options (scroll will apear if the total number exceeds this value)
     */
    maxVisibleOptions: string;
    /**
     * The select name
     */
    name: string;
    /**
     * If required
     */
    required: boolean;
    /**
     * The select id
     */
    selectId: string;
    /**
     * The selected option
     */
    value: string;
    /**
     * If select has warnings
     */
    warning: boolean;
    /**
     * The select width
     */
    width: string;
  }
  interface GxgFormText {
    /**
     * If input is disabled
     */
    disabled: boolean;
    /**
     * If input has errors
     */
    error: boolean;
    /**
     * If input is full width
     */
    fullWidth: boolean;
    /**
     * Input icon possible values: the same as the values for the icon component
     */
    icon: IconType;
    /**
     * Input icon side possible values: left, right
     */
    iconPosition: IconPositionType;
    /**
     * The input id
     */
    inputId: string;
    /**
     * The input label
     */
    label: string;
    /**
     * The input name
     */
    name: string;
    /**
     * The input placeholder
     */
    placeholder: string;
    /**
     * If required
     */
    required: boolean;
    /**
     * The input value
     */
    value: string;
    /**
     * If input has warning
     */
    warning: boolean;
    /**
     * input width
     */
    width: string;
  }
  interface GxgFormTextarea {
    /**
     * Number of cols
     */
    cols: number;
    /**
     * If textarea is disabled
     */
    disabled: boolean;
    /**
     * If textarea display is block
     */
    displayBlock: boolean;
    /**
     * If textarea has errors
     */
    error: boolean;
    /**
     * If textarea is full width
     */
    fullWidth: boolean;
    /**
     * The textarea label
     */
    label: string;
    /**
     * The textarea name
     */
    name: string;
    /**
     * The textarea placeholder
     */
    placeholder: string;
    /**
     * If required
     */
    required: boolean;
    /**
     * Number of rows
     */
    rows: number;
    /**
     * The textarea id
     */
    textareaId: string;
    /**
     * The textarea value
     */
    value: string;
    /**
     * If textarea has warnings
     */
    warning: boolean;
  }
  interface GxgIcon {
    /**
     * The color of the icon.
     */
    color: Color;
    /**
     * If enabled, the icon will be loaded lazily when it's visible in the viewport.
     */
    lazy: boolean;
    /**
     * The size of the icon. Possible values: regular, small.
     */
    size: Size;
    /**
     * The type of icon. Possible values: each of the icons in /assets.
     */
    type: IconType;
  }
  interface GxgMenu {
    fullWidth: boolean;
    menuTitle: string;
    tabs: boolean;
    width: string;
  }
  interface GxgMenuItem {
    active: boolean;
    icon: IconType;
    label: string;
  }
  interface GxgModal {
    /**
     * The footer alignment
     */
    footerAlignment: footerAlignmentType;
    /**
     * The modal title
     */
    modalTitle: string;
    /**
     * Wether the modal is visible or not
     */
    visible: boolean;
    /**
     * The modal width
     */
    width: string;
    /**
     * z-index
     */
    zIndex: string;
  }
  interface GxgProgressBar {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled: boolean;
    /**
     * The label
     */
    label: string;
    /**
     * The value (percentage)
     */
    value: number;
    /**
     * The width
     */
    width: string;
  }
  interface GxgSlider {
    /**
     * The state of the toggle. Whether is disabled or not. Possible values: false, true
     */
    disabled: boolean;
    /**
     * The label
     */
    label: string;
    /**
     * The max value
     */
    max: number;
    /**
     * The initial value
     */
    value: number;
    /**
     * The slider width
     */
    width: string;
  }
  interface GxgSpacerLayout {
    /**
     * Content justify
     */
    justifyContent: string;
    /**
     * The orientation
     */
    orientation: string;
    /**
     * The spacing value, taken from the "token-spacing" global values
     */
    space: string;
  }
  interface GxgSpacerOne {
    /**
     * The spacing value, taken from the "token-spacing" global values
     */
    space: string;
  }
  interface GxgStepper {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled: boolean;
    /**
     * Inline-flex display
     */
    inlineFlex: boolean;
    /**
     * The toggle label
     */
    label: string;
    /**
     * The max value
     */
    max: number;
    /**
     * The min value
     */
    min: number;
    /**
     * The initial vaule
     */
    value: number;
  }
  interface GxgTab {
    isSelected: boolean;
    tab: string;
  }
  interface GxgTabBar {}
  interface GxgTabButton {
    disabled: boolean;
    icon: IconType;
    isSelected: boolean;
    tab: string;
    tabLabel: string;
  }
  interface GxgTabs {
    tab: string;
  }
  interface GxgTemplate {
    /**
     * The state of the toggle. Whether is disabled or not. Possible values: false, true
     */
    disabled: boolean;
    /**
     * The toggle label
     */
    label: string;
  }
  interface GxgToggle {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled: boolean;
    /**
     * The label
     */
    label: string;
    /**
     * If the toggle is active or not
     */
    on: boolean;
    /**
     * The label
     */
    size: SizeType;
  }
  interface GxgToolbar {
    disabled: boolean;
    position: string;
    subtitle: string;
    title: string;
  }
  interface GxgToolbarItem {
    disabled: boolean;
    icon: IconType;
    subtitle: string;
    title: string;
  }
}
declare global {
  interface HTMLGxgAccordionElement
    extends Components.GxgAccordion,
      HTMLStencilElement {}
  var HTMLGxgAccordionElement: {
    prototype: HTMLGxgAccordionElement;
    new (): HTMLGxgAccordionElement;
  };
  interface HTMLGxgAccordionItemElement
    extends Components.GxgAccordionItem,
      HTMLStencilElement {}
  var HTMLGxgAccordionItemElement: {
    prototype: HTMLGxgAccordionItemElement;
    new (): HTMLGxgAccordionItemElement;
  };
  interface HTMLGxgBoxElement extends Components.GxgBox, HTMLStencilElement {}
  var HTMLGxgBoxElement: {
    prototype: HTMLGxgBoxElement;
    new (): HTMLGxgBoxElement;
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
  interface HTMLGxgCardElement extends Components.GxgCard, HTMLStencilElement {}
  var HTMLGxgCardElement: {
    prototype: HTMLGxgCardElement;
    new (): HTMLGxgCardElement;
  };
  interface HTMLGxgColorPickerElement
    extends Components.GxgColorPicker,
      HTMLStencilElement {}
  var HTMLGxgColorPickerElement: {
    prototype: HTMLGxgColorPickerElement;
    new (): HTMLGxgColorPickerElement;
  };
  interface HTMLGxgDatePickerElement
    extends Components.GxgDatePicker,
      HTMLStencilElement {}
  var HTMLGxgDatePickerElement: {
    prototype: HTMLGxgDatePickerElement;
    new (): HTMLGxgDatePickerElement;
  };
  interface HTMLGxgFormCheckboxElement
    extends Components.GxgFormCheckbox,
      HTMLStencilElement {}
  var HTMLGxgFormCheckboxElement: {
    prototype: HTMLGxgFormCheckboxElement;
    new (): HTMLGxgFormCheckboxElement;
  };
  interface HTMLGxgFormMessageElement
    extends Components.GxgFormMessage,
      HTMLStencilElement {}
  var HTMLGxgFormMessageElement: {
    prototype: HTMLGxgFormMessageElement;
    new (): HTMLGxgFormMessageElement;
  };
  interface HTMLGxgFormRadioElement
    extends Components.GxgFormRadio,
      HTMLStencilElement {}
  var HTMLGxgFormRadioElement: {
    prototype: HTMLGxgFormRadioElement;
    new (): HTMLGxgFormRadioElement;
  };
  interface HTMLGxgFormRadioWrapperElement
    extends Components.GxgFormRadioWrapper,
      HTMLStencilElement {}
  var HTMLGxgFormRadioWrapperElement: {
    prototype: HTMLGxgFormRadioWrapperElement;
    new (): HTMLGxgFormRadioWrapperElement;
  };
  interface HTMLGxgFormSelectElement
    extends Components.GxgFormSelect,
      HTMLStencilElement {}
  var HTMLGxgFormSelectElement: {
    prototype: HTMLGxgFormSelectElement;
    new (): HTMLGxgFormSelectElement;
  };
  interface HTMLGxgFormTextElement
    extends Components.GxgFormText,
      HTMLStencilElement {}
  var HTMLGxgFormTextElement: {
    prototype: HTMLGxgFormTextElement;
    new (): HTMLGxgFormTextElement;
  };
  interface HTMLGxgFormTextareaElement
    extends Components.GxgFormTextarea,
      HTMLStencilElement {}
  var HTMLGxgFormTextareaElement: {
    prototype: HTMLGxgFormTextareaElement;
    new (): HTMLGxgFormTextareaElement;
  };
  interface HTMLGxgIconElement extends Components.GxgIcon, HTMLStencilElement {}
  var HTMLGxgIconElement: {
    prototype: HTMLGxgIconElement;
    new (): HTMLGxgIconElement;
  };
  interface HTMLGxgMenuElement extends Components.GxgMenu, HTMLStencilElement {}
  var HTMLGxgMenuElement: {
    prototype: HTMLGxgMenuElement;
    new (): HTMLGxgMenuElement;
  };
  interface HTMLGxgMenuItemElement
    extends Components.GxgMenuItem,
      HTMLStencilElement {}
  var HTMLGxgMenuItemElement: {
    prototype: HTMLGxgMenuItemElement;
    new (): HTMLGxgMenuItemElement;
  };
  interface HTMLGxgModalElement
    extends Components.GxgModal,
      HTMLStencilElement {}
  var HTMLGxgModalElement: {
    prototype: HTMLGxgModalElement;
    new (): HTMLGxgModalElement;
  };
  interface HTMLGxgProgressBarElement
    extends Components.GxgProgressBar,
      HTMLStencilElement {}
  var HTMLGxgProgressBarElement: {
    prototype: HTMLGxgProgressBarElement;
    new (): HTMLGxgProgressBarElement;
  };
  interface HTMLGxgSliderElement
    extends Components.GxgSlider,
      HTMLStencilElement {}
  var HTMLGxgSliderElement: {
    prototype: HTMLGxgSliderElement;
    new (): HTMLGxgSliderElement;
  };
  interface HTMLGxgSpacerLayoutElement
    extends Components.GxgSpacerLayout,
      HTMLStencilElement {}
  var HTMLGxgSpacerLayoutElement: {
    prototype: HTMLGxgSpacerLayoutElement;
    new (): HTMLGxgSpacerLayoutElement;
  };
  interface HTMLGxgSpacerOneElement
    extends Components.GxgSpacerOne,
      HTMLStencilElement {}
  var HTMLGxgSpacerOneElement: {
    prototype: HTMLGxgSpacerOneElement;
    new (): HTMLGxgSpacerOneElement;
  };
  interface HTMLGxgStepperElement
    extends Components.GxgStepper,
      HTMLStencilElement {}
  var HTMLGxgStepperElement: {
    prototype: HTMLGxgStepperElement;
    new (): HTMLGxgStepperElement;
  };
  interface HTMLGxgTabElement extends Components.GxgTab, HTMLStencilElement {}
  var HTMLGxgTabElement: {
    prototype: HTMLGxgTabElement;
    new (): HTMLGxgTabElement;
  };
  interface HTMLGxgTabBarElement
    extends Components.GxgTabBar,
      HTMLStencilElement {}
  var HTMLGxgTabBarElement: {
    prototype: HTMLGxgTabBarElement;
    new (): HTMLGxgTabBarElement;
  };
  interface HTMLGxgTabButtonElement
    extends Components.GxgTabButton,
      HTMLStencilElement {}
  var HTMLGxgTabButtonElement: {
    prototype: HTMLGxgTabButtonElement;
    new (): HTMLGxgTabButtonElement;
  };
  interface HTMLGxgTabsElement extends Components.GxgTabs, HTMLStencilElement {}
  var HTMLGxgTabsElement: {
    prototype: HTMLGxgTabsElement;
    new (): HTMLGxgTabsElement;
  };
  interface HTMLGxgTemplateElement
    extends Components.GxgTemplate,
      HTMLStencilElement {}
  var HTMLGxgTemplateElement: {
    prototype: HTMLGxgTemplateElement;
    new (): HTMLGxgTemplateElement;
  };
  interface HTMLGxgToggleElement
    extends Components.GxgToggle,
      HTMLStencilElement {}
  var HTMLGxgToggleElement: {
    prototype: HTMLGxgToggleElement;
    new (): HTMLGxgToggleElement;
  };
  interface HTMLGxgToolbarElement
    extends Components.GxgToolbar,
      HTMLStencilElement {}
  var HTMLGxgToolbarElement: {
    prototype: HTMLGxgToolbarElement;
    new (): HTMLGxgToolbarElement;
  };
  interface HTMLGxgToolbarItemElement
    extends Components.GxgToolbarItem,
      HTMLStencilElement {}
  var HTMLGxgToolbarItemElement: {
    prototype: HTMLGxgToolbarItemElement;
    new (): HTMLGxgToolbarItemElement;
  };
  interface HTMLElementTagNameMap {
    "gxg-accordion": HTMLGxgAccordionElement;
    "gxg-accordion-item": HTMLGxgAccordionItemElement;
    "gxg-box": HTMLGxgBoxElement;
    "gxg-button": HTMLGxgButtonElement;
    "gxg-button-group": HTMLGxgButtonGroupElement;
    "gxg-card": HTMLGxgCardElement;
    "gxg-color-picker": HTMLGxgColorPickerElement;
    "gxg-date-picker": HTMLGxgDatePickerElement;
    "gxg-form-checkbox": HTMLGxgFormCheckboxElement;
    "gxg-form-message": HTMLGxgFormMessageElement;
    "gxg-form-radio": HTMLGxgFormRadioElement;
    "gxg-form-radio-wrapper": HTMLGxgFormRadioWrapperElement;
    "gxg-form-select": HTMLGxgFormSelectElement;
    "gxg-form-text": HTMLGxgFormTextElement;
    "gxg-form-textarea": HTMLGxgFormTextareaElement;
    "gxg-icon": HTMLGxgIconElement;
    "gxg-menu": HTMLGxgMenuElement;
    "gxg-menu-item": HTMLGxgMenuItemElement;
    "gxg-modal": HTMLGxgModalElement;
    "gxg-progress-bar": HTMLGxgProgressBarElement;
    "gxg-slider": HTMLGxgSliderElement;
    "gxg-spacer-layout": HTMLGxgSpacerLayoutElement;
    "gxg-spacer-one": HTMLGxgSpacerOneElement;
    "gxg-stepper": HTMLGxgStepperElement;
    "gxg-tab": HTMLGxgTabElement;
    "gxg-tab-bar": HTMLGxgTabBarElement;
    "gxg-tab-button": HTMLGxgTabButtonElement;
    "gxg-tabs": HTMLGxgTabsElement;
    "gxg-template": HTMLGxgTemplateElement;
    "gxg-toggle": HTMLGxgToggleElement;
    "gxg-toolbar": HTMLGxgToolbarElement;
    "gxg-toolbar-item": HTMLGxgToolbarItemElement;
  }
}
declare namespace LocalJSX {
  interface GxgAccordion {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled?: boolean;
    /**
     * The aesthetical mode
     */
    mode?: modeType;
    /**
     * Wether only one accordion can be open at the same time or not.
     */
    singleItemOpen?: boolean;
  }
  interface GxgAccordionItem {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled?: boolean;
    /**
     * The toggle id
     */
    itemId: string;
    /**
     * The toggle label
     */
    itemTitle?: string;
    /**
     * The aesthetical mode
     */
    mode?: modeType;
    onAccordionItemClicked?: (event: CustomEvent<any>) => void;
    /**
     * The toggle state
     */
    status?: statusType;
  }
  interface GxgBox {
    height?: string;
    /**
     * The card box-shadow value possible values: from 1 to 8
     */
    shadow?: number;
    width?: string;
  }
  interface GxgButton {
    /**
     * The state of the button. Whether is disabled or not.
     */
    disabled?: boolean;
    /**
     * The kind of button
     */
    type?: ButtonType;
  }
  interface GxgButtonGroup {
    /**
     * The title that will show up above the buttons group
     */
    buttonGroupTitle?: string;
    /**
     * The id of the button that you would like to show active by default
     */
    defaultSelectedBtnId?: string;
    /**
     * Wether the button group is disabled or not.
     */
    disabled?: boolean;
    /**
     * The main title alignment
     */
    titleAlignment?: TitleAlignment;
  }
  interface GxgCard {
    /**
     * The card box-shadow value possible values: from 1 to 8
     */
    shadow?: ShadowType;
    width?: string;
  }
  interface GxgColorPicker {
    cardTitle?: string;
    onChange?: (event: CustomEvent<any>) => void;
    onNameInputEvent?: (event: CustomEvent<any>) => void;
    onSave?: (event: CustomEvent<any>) => void;
    value?: string;
  }
  interface GxgDatePicker {
    /**
     * always show
     */
    alwaysShow?: boolean;
    /**
     * initial date
     */
    defaultDate?: string;
    /**
     * max date
     */
    maxDate?: string;
    /**
     * min date
     */
    minDate?: string;
    /**
     * no weekends
     */
    noWeekends?: boolean;
    /**
     * input width
     */
    width?: string;
  }
  interface GxgFormCheckbox {
    /**
     * Checkbox id
     */
    checkboxId?: string;
    /**
     * Checkbox checked
     */
    checked?: boolean;
    /**
     * Checkbox disabled
     */
    disabled?: boolean;
    /**
     * Checkbox label
     */
    label?: string;
    /**
     * Checkbox name
     */
    name?: string;
    onChange?: (event: CustomEvent<any>) => void;
    /**
     * Checkbox value
     */
    value?: string;
  }
  interface GxgFormMessage {
    /**
     * The kind of message Possible values: error, warning
     */
    type?: MessageType;
  }
  interface GxgFormRadio {
    /**
     * Radio id
     */
    RadioId?: string;
    /**
     * Radio selected
     */
    checked?: boolean;
    /**
     * Radio disabled
     */
    disabled?: boolean;
    /**
     * Radio label
     */
    label?: string;
    /**
     * Radio name
     */
    name?: string;
    onChange?: (event: CustomEvent<any>) => void;
    /**
     * Radio value
     */
    value?: string;
  }
  interface GxgFormRadioWrapper {
    /**
     * Selected Radio id
     */
    RadioId?: string;
    /**
     * Selected Radio value
     */
    RadioValue?: string;
    /**
     * Inline-flex display
     */
    inlineFlex?: boolean;
  }
  interface GxgFormSelect {
    /**
     * If select is disabled
     */
    disabled?: boolean;
    /**
     * If select has errors
     */
    error?: boolean;
    /**
     * If select is full width
     */
    fullWidth?: boolean;
    /**
     * The select label
     */
    label?: string;
    /**
     * The maximum number of visible options (scroll will apear if the total number exceeds this value)
     */
    maxVisibleOptions?: string;
    /**
     * The select name
     */
    name?: string;
    onChange?: (event: CustomEvent<any>) => void;
    onInput?: (event: CustomEvent<any>) => void;
    /**
     * If required
     */
    required?: boolean;
    /**
     * The select id
     */
    selectId?: string;
    /**
     * The selected option
     */
    value?: string;
    /**
     * If select has warnings
     */
    warning?: boolean;
    /**
     * The select width
     */
    width?: string;
  }
  interface GxgFormText {
    /**
     * If input is disabled
     */
    disabled?: boolean;
    /**
     * If input has errors
     */
    error?: boolean;
    /**
     * If input is full width
     */
    fullWidth?: boolean;
    /**
     * Input icon possible values: the same as the values for the icon component
     */
    icon?: IconType;
    /**
     * Input icon side possible values: left, right
     */
    iconPosition?: IconPositionType;
    /**
     * The input id
     */
    inputId?: string;
    /**
     * The input label
     */
    label?: string;
    /**
     * The input name
     */
    name?: string;
    onChange?: (event: CustomEvent<any>) => void;
    onInput?: (event: CustomEvent<any>) => void;
    /**
     * The input placeholder
     */
    placeholder?: string;
    /**
     * If required
     */
    required?: boolean;
    /**
     * The input value
     */
    value?: string;
    /**
     * If input has warning
     */
    warning?: boolean;
    /**
     * input width
     */
    width?: string;
  }
  interface GxgFormTextarea {
    /**
     * Number of cols
     */
    cols?: number;
    /**
     * If textarea is disabled
     */
    disabled?: boolean;
    /**
     * If textarea display is block
     */
    displayBlock?: boolean;
    /**
     * If textarea has errors
     */
    error?: boolean;
    /**
     * If textarea is full width
     */
    fullWidth?: boolean;
    /**
     * The textarea label
     */
    label?: string;
    /**
     * The textarea name
     */
    name?: string;
    onChange?: (event: CustomEvent<any>) => void;
    onInput?: (event: CustomEvent<any>) => void;
    /**
     * The textarea placeholder
     */
    placeholder?: string;
    /**
     * If required
     */
    required?: boolean;
    /**
     * Number of rows
     */
    rows?: number;
    /**
     * The textarea id
     */
    textareaId?: string;
    /**
     * The textarea value
     */
    value?: string;
    /**
     * If textarea has warnings
     */
    warning?: boolean;
  }
  interface GxgIcon {
    /**
     * The color of the icon.
     */
    color?: Color;
    /**
     * If enabled, the icon will be loaded lazily when it's visible in the viewport.
     */
    lazy?: boolean;
    /**
     * The size of the icon. Possible values: regular, small.
     */
    size?: Size;
    /**
     * The type of icon. Possible values: each of the icons in /assets.
     */
    type?: IconType;
  }
  interface GxgMenu {
    fullWidth?: boolean;
    menuTitle?: string;
    tabs?: boolean;
    width?: string;
  }
  interface GxgMenuItem {
    active?: boolean;
    icon?: IconType;
    label?: string;
    onMenuItemActive?: (event: CustomEvent<any>) => void;
  }
  interface GxgModal {
    /**
     * The footer alignment
     */
    footerAlignment?: footerAlignmentType;
    /**
     * The modal title
     */
    modalTitle?: string;
    /**
     * Wether the modal is visible or not
     */
    visible?: boolean;
    /**
     * The modal width
     */
    width?: string;
    /**
     * z-index
     */
    zIndex?: string;
  }
  interface GxgProgressBar {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled?: boolean;
    /**
     * The label
     */
    label?: string;
    /**
     * The value (percentage)
     */
    value?: number;
    /**
     * The width
     */
    width?: string;
  }
  interface GxgSlider {
    /**
     * The state of the toggle. Whether is disabled or not. Possible values: false, true
     */
    disabled?: boolean;
    /**
     * The label
     */
    label?: string;
    /**
     * The max value
     */
    max?: number;
    /**
     * The initial value
     */
    value?: number;
    /**
     * The slider width
     */
    width?: string;
  }
  interface GxgSpacerLayout {
    /**
     * Content justify
     */
    justifyContent?: string;
    /**
     * The orientation
     */
    orientation?: string;
    /**
     * The spacing value, taken from the "token-spacing" global values
     */
    space?: string;
  }
  interface GxgSpacerOne {
    /**
     * The spacing value, taken from the "token-spacing" global values
     */
    space?: string;
  }
  interface GxgStepper {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled?: boolean;
    /**
     * Inline-flex display
     */
    inlineFlex?: boolean;
    /**
     * The toggle label
     */
    label?: string;
    /**
     * The max value
     */
    max?: number;
    /**
     * The min value
     */
    min?: number;
    /**
     * The initial vaule
     */
    value?: number;
  }
  interface GxgTab {
    isSelected?: boolean;
    tab?: string;
  }
  interface GxgTabBar {}
  interface GxgTabButton {
    disabled?: boolean;
    icon?: IconType;
    isSelected?: boolean;
    onTabActivated?: (event: CustomEvent<any>) => void;
    tab?: string;
    tabLabel?: string;
  }
  interface GxgTabs {
    tab?: string;
  }
  interface GxgTemplate {
    /**
     * The state of the toggle. Whether is disabled or not. Possible values: false, true
     */
    disabled?: boolean;
    /**
     * The toggle label
     */
    label?: string;
  }
  interface GxgToggle {
    /**
     * The state of the toggle. Whether is disabled or not.
     */
    disabled?: boolean;
    /**
     * The label
     */
    label?: string;
    /**
     * If the toggle is active or not
     */
    on?: boolean;
    /**
     * The label
     */
    size?: SizeType;
  }
  interface GxgToolbar {
    disabled?: boolean;
    position?: string;
    subtitle?: string;
    title?: string;
  }
  interface GxgToolbarItem {
    disabled?: boolean;
    icon?: IconType;
    subtitle?: string;
    title?: string;
  }
  interface IntrinsicElements {
    "gxg-accordion": GxgAccordion;
    "gxg-accordion-item": GxgAccordionItem;
    "gxg-box": GxgBox;
    "gxg-button": GxgButton;
    "gxg-button-group": GxgButtonGroup;
    "gxg-card": GxgCard;
    "gxg-color-picker": GxgColorPicker;
    "gxg-date-picker": GxgDatePicker;
    "gxg-form-checkbox": GxgFormCheckbox;
    "gxg-form-message": GxgFormMessage;
    "gxg-form-radio": GxgFormRadio;
    "gxg-form-radio-wrapper": GxgFormRadioWrapper;
    "gxg-form-select": GxgFormSelect;
    "gxg-form-text": GxgFormText;
    "gxg-form-textarea": GxgFormTextarea;
    "gxg-icon": GxgIcon;
    "gxg-menu": GxgMenu;
    "gxg-menu-item": GxgMenuItem;
    "gxg-modal": GxgModal;
    "gxg-progress-bar": GxgProgressBar;
    "gxg-slider": GxgSlider;
    "gxg-spacer-layout": GxgSpacerLayout;
    "gxg-spacer-one": GxgSpacerOne;
    "gxg-stepper": GxgStepper;
    "gxg-tab": GxgTab;
    "gxg-tab-bar": GxgTabBar;
    "gxg-tab-button": GxgTabButton;
    "gxg-tabs": GxgTabs;
    "gxg-template": GxgTemplate;
    "gxg-toggle": GxgToggle;
    "gxg-toolbar": GxgToolbar;
    "gxg-toolbar-item": GxgToolbarItem;
  }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "gxg-accordion": LocalJSX.GxgAccordion &
        JSXBase.HTMLAttributes<HTMLGxgAccordionElement>;
      "gxg-accordion-item": LocalJSX.GxgAccordionItem &
        JSXBase.HTMLAttributes<HTMLGxgAccordionItemElement>;
      "gxg-box": LocalJSX.GxgBox & JSXBase.HTMLAttributes<HTMLGxgBoxElement>;
      "gxg-button": LocalJSX.GxgButton &
        JSXBase.HTMLAttributes<HTMLGxgButtonElement>;
      "gxg-button-group": LocalJSX.GxgButtonGroup &
        JSXBase.HTMLAttributes<HTMLGxgButtonGroupElement>;
      "gxg-card": LocalJSX.GxgCard & JSXBase.HTMLAttributes<HTMLGxgCardElement>;
      "gxg-color-picker": LocalJSX.GxgColorPicker &
        JSXBase.HTMLAttributes<HTMLGxgColorPickerElement>;
      "gxg-date-picker": LocalJSX.GxgDatePicker &
        JSXBase.HTMLAttributes<HTMLGxgDatePickerElement>;
      "gxg-form-checkbox": LocalJSX.GxgFormCheckbox &
        JSXBase.HTMLAttributes<HTMLGxgFormCheckboxElement>;
      "gxg-form-message": LocalJSX.GxgFormMessage &
        JSXBase.HTMLAttributes<HTMLGxgFormMessageElement>;
      "gxg-form-radio": LocalJSX.GxgFormRadio &
        JSXBase.HTMLAttributes<HTMLGxgFormRadioElement>;
      "gxg-form-radio-wrapper": LocalJSX.GxgFormRadioWrapper &
        JSXBase.HTMLAttributes<HTMLGxgFormRadioWrapperElement>;
      "gxg-form-select": LocalJSX.GxgFormSelect &
        JSXBase.HTMLAttributes<HTMLGxgFormSelectElement>;
      "gxg-form-text": LocalJSX.GxgFormText &
        JSXBase.HTMLAttributes<HTMLGxgFormTextElement>;
      "gxg-form-textarea": LocalJSX.GxgFormTextarea &
        JSXBase.HTMLAttributes<HTMLGxgFormTextareaElement>;
      "gxg-icon": LocalJSX.GxgIcon & JSXBase.HTMLAttributes<HTMLGxgIconElement>;
      "gxg-menu": LocalJSX.GxgMenu & JSXBase.HTMLAttributes<HTMLGxgMenuElement>;
      "gxg-menu-item": LocalJSX.GxgMenuItem &
        JSXBase.HTMLAttributes<HTMLGxgMenuItemElement>;
      "gxg-modal": LocalJSX.GxgModal &
        JSXBase.HTMLAttributes<HTMLGxgModalElement>;
      "gxg-progress-bar": LocalJSX.GxgProgressBar &
        JSXBase.HTMLAttributes<HTMLGxgProgressBarElement>;
      "gxg-slider": LocalJSX.GxgSlider &
        JSXBase.HTMLAttributes<HTMLGxgSliderElement>;
      "gxg-spacer-layout": LocalJSX.GxgSpacerLayout &
        JSXBase.HTMLAttributes<HTMLGxgSpacerLayoutElement>;
      "gxg-spacer-one": LocalJSX.GxgSpacerOne &
        JSXBase.HTMLAttributes<HTMLGxgSpacerOneElement>;
      "gxg-stepper": LocalJSX.GxgStepper &
        JSXBase.HTMLAttributes<HTMLGxgStepperElement>;
      "gxg-tab": LocalJSX.GxgTab & JSXBase.HTMLAttributes<HTMLGxgTabElement>;
      "gxg-tab-bar": LocalJSX.GxgTabBar &
        JSXBase.HTMLAttributes<HTMLGxgTabBarElement>;
      "gxg-tab-button": LocalJSX.GxgTabButton &
        JSXBase.HTMLAttributes<HTMLGxgTabButtonElement>;
      "gxg-tabs": LocalJSX.GxgTabs & JSXBase.HTMLAttributes<HTMLGxgTabsElement>;
      "gxg-template": LocalJSX.GxgTemplate &
        JSXBase.HTMLAttributes<HTMLGxgTemplateElement>;
      "gxg-toggle": LocalJSX.GxgToggle &
        JSXBase.HTMLAttributes<HTMLGxgToggleElement>;
      "gxg-toolbar": LocalJSX.GxgToolbar &
        JSXBase.HTMLAttributes<HTMLGxgToolbarElement>;
      "gxg-toolbar-item": LocalJSX.GxgToolbarItem &
        JSXBase.HTMLAttributes<HTMLGxgToolbarItemElement>;
    }
  }
}
