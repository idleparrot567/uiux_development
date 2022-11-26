// TODO: create a component that displays a single bakery item
import React from 'react'

export default function BakeryItem({product, price, setPrice, lst, setLst,}) {
  function handleClick() {
    setPrice(price + product.price);
    lst.push(product.name)
    console.log()
    setLst(lst)
  }
  return (
    <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <button onClick={handleClick}>Add to Cart</button>;
    </div>
  )
}
