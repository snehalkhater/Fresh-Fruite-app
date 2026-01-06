import React from 'react'
import { Cherry as CherryIcon } from 'lucide-react'

function Navabr() {
  return (
    <div className='sticky top-3 w-max-8/12 bg-[#F2EFE7] mx-auto px-10 py-5 rounded-full
    flex items-center gap-3 shadow-md shadow-red-200'>
        <CherryIcon className="w-8 h-8 text-red-500" />
        <h2 className='text-2xl font-bold'>Fruitify</h2>
    </div>
  )
}

export default Navabr