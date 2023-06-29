/* eslint-disable react/prop-types */

export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          {product.title}
        </div>
))}
    </div>
  )
}