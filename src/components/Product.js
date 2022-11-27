import { Button } from '@mui/material';
import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
  return (
      <div className='product'>
        <img className='small' src={product.image} alt={product.description}></img>
        <div><h3>{product.name}</h3></div>
        <div> ${product.price}</div>
        <div>
          <Button onClick= {() => {onAdd(product);}} variant="text">Add To Cart</Button>  
          <Button onClick= {() => {onAdd(product);}} variant="text">Remove From Cart</Button>
        </div>

      </div>
  )
}
