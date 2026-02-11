import React from 'react'
import Navbar from "../components/Navbar";
import FRUITS from "../data.json";
import FruitCard from '../components/FruitCard';

function Fruits() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
          
          <div className='flex flex-wrap justify-center'>
          {FRUITS.map((fruit)=>{
          return<FruitCard key = {fruit.id} {...fruit } />;
        })}
          </div>
        </div>

    </div>
  )
}

export default Fruits