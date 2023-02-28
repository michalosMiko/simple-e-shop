
import './App.css';
import Product from './Product';
import { useState } from "react"

function App() {

  const [cart, setCart] = useState([]);
  
  const handler = function(product) {
    const newCart = [...cart];
    // console.log(product)
    newCart.push(product);
    console.log(newCart);
    setCart(newCart)
  }
  const data = [
{
    id: 1,
    name: "Tesla",
    price: 5
},
{
    id: 2,
    name: "LG",
    price: 4
}

  ]
  
  return (
    <div className="App">
      {cart.length}
      {data.map(item => <Product key={item.id} product={item} onClickHandler={handler}/>)}
       
    
       
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=C4LoZjzqG_k ***