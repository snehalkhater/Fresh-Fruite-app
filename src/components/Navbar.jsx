import React from "react";
import { Cherry as CherryIcon, ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Navbar({refreshCart}) {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartItem")) || [];
    setCartItems(existingCart);
  }, [refreshCart]);

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2
      max-w-5xl w-full bg-[#F2EFE7]
      px-12 py-5 rounded-full
      flex items-center gap-3
      shadow-md shadow-red-200 z-50"
    >
      <CherryIcon className="w-8 h-8 text-red-500" />
      <h2 className="text-2xl font-bold text-gray-800">
        Fruitify
      </h2>


      <Link  to="/mycart" className="ml-auto relative">
        {cartItems.length > 0 ? (
          <span className="absolute -top-3 right-2 text-black font-bold bg-red-500 rounded-full px-1 text-sm">
            {cartItems.length}
          </span>
        ) : null}
        <ShoppingCartIcon className="w-7 h-7 text-black ml-auto cursor-pointer" />
      </Link>


    </div>

  );
}

export default Navbar;
