import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import useFetchProducts from "./utils/useFetchProducts";
import { Routes, Route } from "react-router";

function App() {
  const  {products} = useFetchProducts();
  console.log(products);
  return (
    <>

<Navbar />
{ products.length&&
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>
}
    </>
  );
}

export default App;
