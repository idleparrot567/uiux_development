import React from 'react';

export default function Header(props){
    return (
        <header className='row block'>
            <div>
            <a href="#/">
                <h1>The Idle Parrot's Bakery </h1>
            </a>
            </div>
            <div>
            <a href="#/">
                <h1>Cart</h1>
            </a>
            </div>
            <div>
            <a href="#/">
                <h1>Sign In</h1>
            </a>
            </div>

        </header>
    );
}