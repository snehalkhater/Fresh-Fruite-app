import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import FRUITS from "../data.json";
import FruitCard from '../components/FruitCard';
import toast, { Toaster } from 'react-hot-toast';


function Fruits() {
  const [refreshCart, setRefreshCart] = useState(false);
  function addtocart(item) {
    const existingcart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = existingcart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      existingcart[itemIndex].quantity += 1;
    } else {
      existingcart.push({
        ...item,
        quantity: 1
      });
    }
    localStorage.setItem("cart", JSON.stringify(existingcart));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  return (
    <div>
      <Navbar refreshCart={refreshCart} />
      <div className=' min-h-screen'>
        <div className='m-20 flex flex-wrap justify-center'>
          {FRUITS.map((fruits) => {
            return <FruitCard key={fruits.id} {...fruits} addtocart={addtocart} />;
          })}
        </div>
      </div>
      <Toaster position="top-center" />
      <Footer />
    </div>
  )
}

export default Fruits