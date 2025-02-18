import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { useNavigate } from "react-router";

function Cart({ products }) {
    let [cart, setCart] = useState( []);
    const navigate=useNavigate()
    useEffect(() => {
      let e=localStorage.getItem("cart")
      e=JSON.parse(e);
   
      setCart(e)
    }, [products]);
    if(!cart || !cart.length){
        navigate('/')
      }
  const cartContent = cart.map((element) => {
    // console.log(element)
    return {
      product: products.find((prod) => element.productId == prod.id),
      qty: element.qty,
    };
  });
  console.log(cartContent);

  return (
    <div className="cart">
      {cartContent.map((item, i) => (
        <CartCard item={item} key={i} setCart={setCart} cart={cart} />
      ))}
    </div>
  );
}

export default Cart;
