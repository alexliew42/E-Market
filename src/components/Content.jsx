import {useState, useEffect} from "react"
import {ProductsIndex} from "./ProductsIndex.jsx"

export function Content() {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  }, [])    

  return (
    <div>
      <ProductsIndex products={products}/>
    </div>
  );
}
