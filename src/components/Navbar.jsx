import React, { useState, useEffect } from "react";
import { Cherry as CherryIcon, ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    function updateCart() {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(existingCart);
    }

    updateCart();

    window.addEventListener("cartUpdated", updateCart);

    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2
      max-w-5xl w-full bg-[#F2EFE7]
      px-12 py-5 rounded-full
      flex items-center gap-3
      shadow-md shadow-red-200 z-50"
    >
      <Link to="/" className="flex items-center gap-2">
        <CherryIcon className="w-8 h-8 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          Fruitify
        </h2>
      </Link>

      <Link to="/mycart" className="ml-auto relative">
        {totalItems > 0 && (
          <span className="absolute -top-3 right-2 text-black font-bold bg-red-500 rounded-full px-2 text-sm">
            {totalItems}
          </span>
        )}
        <ShoppingCartIcon className="w-7 h-7 text-black ml-auto cursor-pointer" />
      </Link>
    </div>
  );
}

export default Navbar;