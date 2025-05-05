// navigationButtons.js
import { LightningElement } from "lwc";
import { navigateTo } from "c/router";

export default class NavigationButtons extends LightningElement {
  goHome() {
    navigateTo("home");
  }

  goCart() {
    navigateTo("cart");
  }
}
