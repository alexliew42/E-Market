export function ProductsShow(props) {
  return(
    <div>
      {console.log(props)}
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <p>${props.product.price}</p>
      <p>{props.product.rating.rate} stars</p>
      {/* <img src={props.product.image} /> */}
    
    </div>
  )
}