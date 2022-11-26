import Header from './components/Header';
import Main from './components/Main';
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
  return (
    <div className="App">
     <Header></Header>
     <div className='row'>
     <Main products={products}></Main>
     <Basket cartItems={cartItems}></Basket>
     </div>
    </div>
  );
}

export default App;
