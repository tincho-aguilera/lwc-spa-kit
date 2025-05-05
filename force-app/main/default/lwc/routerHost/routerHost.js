// routerHost.js
import { LightningElement } from "lwc";
import { defineRoute, startRouter } from "c/router";

export default class RouterHost extends LightningElement {
  showHome = false;
  showCart = false;

  connectedCallback() {
    defineRoute("home", () => {
      this.reset();
      this.showHome = true;
    });

    defineRoute("cart", () => {
      this.reset();
      this.showCart = true;
    });

    startRouter();
  }

  reset() {
    this.showHome = false;
    this.showCart = false;
  }
}
