import Reacr from 'react';
import Product from './Product';
import Filter from './Filter';
 
export default function Main(props){
    const {products, onAdd, onRemove} = props;
    return (   
        <main className='block col-2'>
                <div className='row'>
                    {products.map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}></Product>
                    ))}
                </div>
         </main>
    );
}