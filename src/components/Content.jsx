import {useState, useEffect} from "react"
import {ProductsIndex} from "./ProductsIndex.jsx"
import {Modal} from "./Modal.jsx"

export function Content() {

  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  }, [])    

  const handleShowProduct = (product) => {
    console.log(product)
    setCurrentProduct(product)
  }

  return (
    <div>
      <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
      <Modal show={true}>
        <h1>test</h1>
      </Modal>
    </div>
  );
}
