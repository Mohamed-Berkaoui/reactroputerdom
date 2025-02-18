import { useEffect, useState } from 'react'
import appAxios from './appAxios';

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(function () {
      setLoading(true);
      appAxios
        .get("/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }, []);
  
  return (
    {loading,products,error}
  )
}

export default useFetchProducts