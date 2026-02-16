import React from 'react'
import Button from './Button';
import { CircleMinus, CirclePlus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

function FruitCard({
  id,
  name,
  image,
  description,
  price,
  category,
  unit,
  addtocart,

}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='bg-white border border-slate-500  w-90 p-4 m-5 rounded-lg'>

      <div className='relative'> <img src={image}
        alt={name}
        className='w-full h-60 object-cover rounded-md' />
        <span className='absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md'>{category}</span>
      </div>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
      <p className='my-2'><span className='font-bold text-xl'>₹ {price}</span></p>
      <p className='text-xs text-gray-500 mt-1'>Unit: {unit}</p>


      <div className='flex justify-center items-center my-4 gap-4'>
        <CircleMinus className='cursor-pointer' onClick={() => {
          if (quantity > 1) { setQuantity(quantity - 1); }
          else {
            toast.error("Quantity cannot be less than 1");
          }
        }}
        />
        <label>
          {quantity}
        </label>
        <CirclePlus className='cursor-pointer' onClick={() => {
          if (quantity < 10) {
            setQuantity(quantity + 1);
          } else {
            toast.error("Quantity cannot be more than 10");
          }
        }}

        />
      </div>


     <div className="flex justify-center mt-4">
  <Button
    title="Add To Cart"
    variant='primary'
    onClick={() => {
      addtocart({
        id,
        name,
        image,
        description,
        price,
        category,
        unit,
        quantity,
        totalamount : price * quantity,
      });
  
    }}
  />
</div>

    </div>
  )
}

export default FruitCard