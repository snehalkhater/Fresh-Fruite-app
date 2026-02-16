import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FRUITS from "../data.json";
import FruitCard from '../components/FruitCard';
import  toast, {Toaster} from 'react-hot-toast';


function Fruits() {
 const [refreshCart, setRefreshCart] = useState(false);

  function addtocart(item){
    const existingCart = JSON.parse(localStorage.getItem("cartItem")) || [];
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      existingCart[itemIndex] = item;
    } else {
      existingCart.push(item);
    }

    localStorage.setItem("cartItem", JSON.stringify(existingCart));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart");
    }, 100);
  }
  return (
    <div>
        <Navbar refreshCart={refreshCart} />
        <div className='min-h-screen'>
          <div className='m-20 flex flex-wrap justify-center'>
          {FRUITS.map((fruits)=>{
          return<FruitCard key = {fruits.id} {...fruits } addtocart={addtocart} />;
        })}
          </div>
        </div>
        <Toaster  position="top-center"/>
    </div>
  )
}

export default Fruits