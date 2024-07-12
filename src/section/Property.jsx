import React from 'react'
import { Link } from 'react-router-dom'

const Property = ({property}) => {
  return (
    <div className='border p-4 rounded-2xl bg-white-400 flex flex-col items-center justify-center gap-10 text-center mt-12 shadow-3xl'>
        <Link to={`${property.slug}`} className='w-[100%]'>
        <img src={property.img} alt="" className='h-64 w-[70%] object-cover rounded-md mx-auto'/></Link>
        <h2 className='font-medium text-lg md:text-xl'>
            {property.title}
        </h2>
        <div className='flex gap-2'>
            <img src="/pin.png" alt="" width={20} />
            <h2 className='text-sm'>
                {property.address}
            </h2>
        </div>
        <div className='flex justify-between gap-24'>
                    <p> <img src="/bath.png" alt=""width={20}/> <span>{property.bathroom} Bathroom</span></p>
                    <p> <img src="/bed.png" alt=""width={20}/> <span>{property.bathroom} Bedroom</span></p>
        </div>

        <h3 className='text-xl font-medium bg-blue-50 p-1'>
            ${property.price}
        </h3>

        <button className='w-[80%]'>
            <Link to={property.slug} className='bg-blue-900 w-[100%] p-2 text-blue-50 rounded-xl'>View More</Link>
        </button>


    </div>
  )
}

export default Property