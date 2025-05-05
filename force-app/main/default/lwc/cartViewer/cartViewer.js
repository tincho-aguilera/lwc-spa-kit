import { LightningElement } from "lwc";
import { globalStore } from "c/globalStore";

export default class CartViewer extends LightningElement {
  cart = { items: [], total: 0 };

  connectedCallback() {
    globalStore.subscribe("cart", (newCart) => {
      this.cart = newCart || { items: [], total: 0 };
    });
  }
}
