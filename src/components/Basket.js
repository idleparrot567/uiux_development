import React from 'react';
import Filter from './Filter';

import {useState, useEffect} from 'react';

export default function Basket(props){
    const {cartItems, products, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    const itemsLength = cartItems?.length || 0;

    //the filter/sort variables
    const [state, setState] = useState({
      products: products,
      type:"",
      sort:""
    })

    //function that uses for sorting the item
  const sortProducts=(event)=>{
    //implement
    //console.log(event.target.value);
    const sort = event.target.value;
    console.log(sort);
    setState((state) => ({
      sort: sort,
      products: state.products.slice().sort((a,b) => (
        sort === "lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "highest"?
        ((a.price < b.price)? 1:-1):
        ((a.id > b.id)? 1:-1)
      )),
    }));
    
  };
  //function for filtering the products
  const filterProducts=(event)=>{
    //implement
    console.log(event.target.value);
    if (event.target.value===""){
      setState({type: event.target.value, products: products});
    } else {
      setState({
        type: event.target.value,
        products: products.filter(
          (products) => products.category.indexOf(event.target.value) >=0
        ),
      });
      console.log(state.type);
    }
  };

    return (
    <aside className='block col-1'>
        <h2> Sort and Filter</h2>
        <Filter 
        sort = {state.sort} type = {state.type}
        filterProducts = {filterProducts} 
        sortProducts = {sortProducts}> </Filter>
        <h2> Cart Items </h2>
        <div> {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
            <div key={item.id} className='row'>
                <div className='col-2'>{item.name}</div>
                <div className='col-2 text-right'> {item.qty} x $ {item.price.toFixed(2)}</div>
            </div>
        )
        )}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
        </div>
        


    </aside>
    );
}