import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router"
import appAxios from "../utils/appAxios"

function SingleProduct() {
const [product,setProduct]=useState({})
  const params=useParams()
  const location=useLocation()
  console.log(location)

  useEffect(function(){
appAxios.get('/products/'+params.id)
.then(res=>setProduct(res.data))
.catch(e=>console.log(e.message))
  },[params.id])

  console.log(product)
  return (
    <div className="product-container">
      <img src={product.image} alt="" />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description} </p>
        <p>{product.price} </p>
        <Link to={"/product/"+(+params.id+1)}><button>next</button></Link>
      </div>

    </div>
  )
}

export default SingleProduct