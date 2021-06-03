import { Component, Element, Listen, h, State, Prop } from "@stencil/core";

@Component({
  tag: "gxg-tabs",
  styleUrl: "tabs.scss",
  shadow: true,
})
export class GxgTabs {
  @Element() element: HTMLGxgTabsElement;

  @Prop() position: TabsPosition = "top";
  @Prop({ reflect: true }) height: Height = "auto";

  @State() activeTab = "";

  componentWillLoad() {
    if (this.position === "bottom") {
    }
  }

  @Listen("tabActivated")
  tabActivatedHandler(event) {
    //first, get the active tab, and set it´s outer-container overflow to hidden
    const activeTab = this.element.querySelector("gxg-tab[is-selected]");
    if (activeTab !== null) {
      const outerContainer = activeTab.shadowRoot.querySelector(
        ".outer-container"
      ) as HTMLElement;
      outerContainer.style.overflow = "hidden";
    }
    this.updateActiveChildren(event.target.tab, "gxg-tab-button");
    this.updateActiveChildren(event.target.tab, "gxg-tab");

    //hide tab menu
  }

  updateActiveChildren(activeTab: string, tagName: string) {
    const children = Array.from(
      this.element.querySelectorAll(tagName) as NodeListOf<
        HTMLGxgTabButtonElement | HTMLGxgTabElement
      >
    );
    for (const child of children) {
      child.isSelected = activeTab === child.tab;

      if (activeTab === child.tab) {
        let outerContainer = child.shadowRoot.querySelector(
          ".outer-container"
        ) as HTMLElement;

        if (child.tagName === "GXG-TAB") {
          outerContainer = child.shadowRoot.querySelector(
            ".outer-container"
          ) as HTMLElement;

          setTimeout(function () {
            outerContainer.style.overflow = "visible";
          }, 100);
        }
      }
    }
  }

  render() {
    return (
      <div class="main-container">
        {this.position === "bottom"
          ? [
              <div class="tabs-container">
                <slot></slot>
              </div>,
              <div class="tab-bar-container">
                <slot name="tab-bar" />
              </div>,
            ]
          : [<slot name="tab-bar" />, <slot></slot>]}
      </div>
    );
  }
}

export type TabsPosition = "top" | "bottom" | "left" | "right";
export type Height = "auto" | "100%";
