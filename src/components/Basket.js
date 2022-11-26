import React from 'react';

export default function Basket(props){
    const {cartItems} = props;
    const itemsLength = cartItems?.length || 0;
    console.log(cartItems.length);
    console.log(props.length);
    console.log(typeof(cartItems));
    return (
    <aside className='block col-1'>
        <h2> Cart Items </h2>
        <div> 
            {cartItems.length == 0 && <div>Cart is empty</div>}
        </div>
    </aside>
    );
}