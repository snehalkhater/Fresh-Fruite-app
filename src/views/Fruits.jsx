import React from 'react'
import Navbar from "../components/Navbar";
import FRUITS from "../data.json";
import FruitCard from '../components/FruitCard';

function Fruits() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
          <div className='m-20 flex flex-wrap justify-center'>
          {FRUITS.map((fruits)=>{
          return<FruitCard key = {fruits.id} {...fruits } />;
        })}
          </div>
        </div>

    </div>
  )
}

export default Fruits