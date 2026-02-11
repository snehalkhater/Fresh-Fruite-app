import React from 'react'
import Button from './Button';
import { CircleMinus, CirclePlus } from 'lucide-react';
import { useState } from 'react';

function FruitCard(
    id,
    name,
    image,
    description,
    price,
    category,
    unit
){ 
const [quantity, setQuantity] = useState(1);
{

}
  return (
    <div className=' w-90 bg-white border border-slate-500 p-4 m-5 rounded-lg'>
        <img src={image} alt={name} className='w-full h-60 object-cover rounded-md'/>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
       <p className='my-2'><span className='font-bold text-xl'>₹ {price}</span></p>
        <p className='text-xs text-gray-500 mt-1'>Category: {category} | Unit: {unit}</p>

        <div className="flex justify-center mt-4">
          <Button tiltle="Add To Cart" 
          />
        </div>
    </div>
  )
}

export default FruitCard