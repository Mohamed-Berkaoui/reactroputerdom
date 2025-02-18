import { useEffect, useState } from "react";
import appAxios from "../utils/appAxios";
import ProductCard from "./ProductCard";

function ProductList({products}) {
 
  return (
    <div className="product-list">
      {products.map((e) => (
        <ProductCard {...e} key={e.id} />
      ))}
    </div>
  );
}

export default ProductList;
