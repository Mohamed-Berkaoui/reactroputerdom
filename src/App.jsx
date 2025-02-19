import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import useFetchProducts from "./utils/useFetchProducts";
import { Routes, Route, Outlet ,createBrowserRouter,RouterProvider} from "react-router";

function App() {
  const { products } = useFetchProducts();
  
    const router = createBrowserRouter([
{
  path: "/",
  element: <Home products={products}/>,
},
{
  path: "/cart",
  element: <Cart products={products}/>,
},
{
  path: "/product",
  children:[
    {
      path:":id",
      element:<SingleProduct/>
    }
  ]
}
]);

  return (
    <>
      <Navbar />
  <RouterProvider router={router}/>
      {/* {products.length && (
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart products={products} />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      )} */}
    </>
  );
}

export default App;
