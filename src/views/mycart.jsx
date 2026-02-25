import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartFruitCard from '../components/CartFruitCard';

function MyCart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(existingCart);
    }, []);

    useEffect(() => {
        const total = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        setTotalPrice(total);
    }, [cartItems]);

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <div>
            <Navbar />

            <h3 className='text-right px-10 mt-25 text-lg font-semibold'>
                Total Amount : ₹ {totalPrice} /-
            </h3>

            <div className='min-h-screen'>
                <div className='max-h-[700px] py-4 overflow-y-scroll'>

                    {cartItems.length === 0 ? (
                        <h2 className='text-center mt-20 text-2xl text-gray-500'>
                            Your Cart is Empty 🛒
                        </h2>
                    ) : (
                        cartItems.map(item => (
                            <CartFruitCard
                                key={item.id}
                                {...item}
                                removeItem={removeItem}
                            />
                        ))
                    )}

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MyCart;
