/* eslint-disable react/prop-types */

export function ProductsIndex(props) {
  return (
    <div>
      <h1 id="all-p">All products</h1>
      <div id="index">
      {props.products.map((product) => (
        <div key={product.id}>
          <div className="card">
            <img id="product-images" src={`${product.image}`} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
))}
      </div>  
    </div>
  )
}