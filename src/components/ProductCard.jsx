import { useState } from "react";
import Modal from "./Modal";

function ProductCard({ title, price, image, id }) {
  const [showModal, setShowModal] = useState("");
  function handleAddToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    var index = -1;
    cart.forEach((element, i) => {
      if (element.productId == id) {
        index = i;
      }
    });

    if (index >= 0) {
      cart[index].qty++;
      setShowModal("product quantiity updated")
    } else {
      cart.push({ productId: id, qty: 1 });
      setShowModal("product added to cart")

    }
    setTimeout(function(){
        setShowModal('')
    },5000)
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return (
    <>
      {showModal ? <Modal text={showModal}  setShowModal={setShowModal}/> : null}
      <div className="product-card">
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{price} $</p>
        <button onClick={handleAddToCart}>add to cart</button>
      </div>
    </>
  );
}

export default ProductCard;
