import Header from './components/Header';
import Main from './components/Main';
import Filter from './components/Filter';
import Basket from './components/Basket';
import {useState, useEffect} from 'react';

import { createTheme} from '@mui/material/styles';
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"
import { getPanelId } from '@mui/base';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


const theme = createTheme({
  palette: {
    primary:{
      light: '#FDE8E9',
      main: '#D34F73',
      dark: '#1F2232',
      contrastText: '',

    },
    secondary: {
      light:'#D3FAD6',
      main: '#D1EFB5',
      dark: '#596475',
      contrastText:'#ffffff',
    },
  },
  });

function App() {
  const [products, setProducts] = useState(bakeryData);
  const [cartItems, setCartItems] = useState([]);
  // build a function that aggregates
  // using javascript dictionary
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
     <Header></Header>
     <div className='row'>
     <Main onAdd = {onAdd} onRemove = {onRemove} products={products}></Main>
     <Basket onAdd = {onAdd} onRemove = {onRemove} products ={products} cartItems={cartItems}></Basket>
     </div>
    </div>
  );
}

export default App;
