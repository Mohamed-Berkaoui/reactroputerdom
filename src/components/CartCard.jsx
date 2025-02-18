import { useState } from "react";

function CartCard({ item,cart, setCart }) {
  function handleIncQty() {
    const newCart= cart.map((element) =>
        element.productId == item.product.id
          ? { ...element, qty: element.qty + 1 }
          :  element 
      )
    setCart(
        newCart
    );
    localStorage.setItem("cart",JSON.stringify(newCart));
  }

  function handleDncQty() {
    const newCart=  cart.map((element) =>
        element.productId == item.product.id
          ? element.qty > 1
            ? { ...element, qty: element.qty - 1 }
            : element
          : element
      )
    setCart(
        newCart
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function handleDelete() {
    const newCart=cart.filter((element) => element.productId != item.product.id)
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  return (
    <div className="cart-card">
      <img src={item.product.image} alt="" />
      <h4>{item.product.title}</h4>
      <p>{item.product.price}</p>

      <div>
        <button onClick={handleIncQty}>+</button>
        <p>{item.qty}</p>
        <button onClick={handleDncQty}>-</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}

export default CartCard;
