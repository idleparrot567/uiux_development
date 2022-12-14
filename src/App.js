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
  // const [products, setProducts] = useState(bakeryData);
  const [state, setState] = useState({
    products: bakeryData,
    type:'',
    sort:''
  })
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
  //function that removes items
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
  //------------------ filter and sort products functions -----------


  //function that uses for sorting the item
const sortProducts=(event)=>{
  const sort = event.target.value;
  const type = state.type;
  console.log("before change sort",event.target);
  //first sort
  const sorted = state.products.slice().sort((a,b) => (
    sort === "Lowest"?
    ((a.price > b.price)? 1:-1):
    sort === "Highest"?
    ((a.price < b.price)? 1:-1):
    ((a.id > b.id)? 1:-1)
  ));
  console.log("sorted", sorted);
  console.log("type after sorted", type);
  //make sure the results are filtered as well
  if (type===""){
    setState({sort:sort, type: type, products: sorted});
  } else {
    setState({
      sort: sort,
      type: type,
      products: sorted.filter(
        (product) => product.category.includes(type)
      ),
    });
  }
};

//function for filtering the products
const filterProducts=(event)=>{
  //implement
  const type = event.target.value;
  const sort = state.sort;
  console.log("before change filter",event.target);
  const filtered = '';
  //filter first
  if (event.target.value===""){
     state.products = bakeryData;
  } else {
     state.products = bakeryData.filter(
      (product) => product.category.includes(type));
  }
  console.log("first filter,", filtered);

  //then make sure the products are sorted as well
  setState({
    sort: state.sort,
    type: type,
    products: state.products.slice().sort((a,b) => (
      sort === "Lowest"?
      ((a.price > b.price)? 1:-1):
      sort === "Highest"?
      ((a.price < b.price)? 1:-1):
      ((a.id > b.id)? 1:-1)
    )),
  });
};
useEffect(() => { 
  console.log("Updated states due to filter", state)
}, [state])

  return (
    <div className="App">
     <Header></Header>
     <div className='row'>
     <Main onAdd = {onAdd} onRemove = {onRemove} products={state.products}></Main>
     <Basket onAdd = {onAdd} onRemove = {onRemove} 
     products ={bakeryData} cartItems={cartItems}
     sortProducts = {sortProducts} filterProducts = {filterProducts}
     state = {state}></Basket>
     </div>
    </div>
  );
}

export default App;
