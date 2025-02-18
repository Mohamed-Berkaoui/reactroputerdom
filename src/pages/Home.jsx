import { Outlet } from "react-router"
import ProductList from "../components/ProductList"

function Home({products}) {
  return (
    <div>
        <h2>our products </h2>
        <hr />
        <ProductList products={products}/>
       
    </div>
  )
}

export default Home