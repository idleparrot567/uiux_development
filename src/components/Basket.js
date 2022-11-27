import React from 'react';
import Filter from './Filter';

export default function Basket(props){
    const {cartItems, products, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    const itemsLength = cartItems?.length || 0;
    return (
    <aside className='block col-1'>
        <h2> Filter</h2>
        <Filter productsLength = {products.length}> </Filter>
        <h2> Cart Items </h2>
        <div> {cartItems.length == 0 && <div>Cart is empty</div>}
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