import React, { use, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

function mycart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem("cartItem")) || [];
        setCartItems(existingCart);
    }, []);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price=0;
        cartItems.map((item) => {
            price += item.totalPrice;
        })
        setTotalPrice(price);
    }, [cartItems]);
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
            {
                cartItems.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                }
            )
            }
            <h1 className='text-3xl font-bold text-center mt-20'>My Cart</h1>
        </div>
        <Footer/>
     </div>
  )
}

export default mycart