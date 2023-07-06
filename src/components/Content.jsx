import {useState, useEffect} from "react"
import {ProductsIndex} from "./ProductsIndex.jsx"
import {Modal} from "./Modal.jsx"

export function Content() {

  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState([])
  const [isProductVisible, setIsProductVisible] = useState(false)
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  }, [])    

  const handleShowProduct = (product) => {
    console.log(product)
    setIsProductVisible(true)
    setCurrentProduct(product)
  }

  const handleClose = () => {
    console.log("closing")
    setIsProductVisible(false)
  }

  return (
    <div>
      <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
      <Modal show={isProductVisible} onClose={handleClose}> 
        <h1>test</h1>
      </Modal>
    </div>
  );
}
