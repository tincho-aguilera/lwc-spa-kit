import { LightningElement } from "lwc";
import { globalStore } from "c/globalStore";

export default class CartAdder extends LightningElement {
  addProduct(product) {
    const current = globalStore.get("cart") || { items: [], total: 0 };

    // Clonar profundamente el carrito
    const newCart = {
      items: current.items.map((item) => ({ ...item })), // copiar cada ítem
      total: 0
    };

    // Buscar si el producto ya está
    const existing = newCart.items.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      newCart.items.push({ ...product, quantity: 1 });
    }

    // Recalcular total
    newCart.total = newCart.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    // Guardar nuevo estado
    globalStore.set("cart", newCart);
  }

  addShampoo() {
    this.addProduct({ id: "1", name: "Shampoo", price: 1000 });
  }

  addCrema() {
    this.addProduct({ id: "2", name: "Crema", price: 1500 });
  }
}
