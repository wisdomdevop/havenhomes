import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-zinc-800 text-white mt-24'>
        <section className='p-8 flex flex-col gap-10'>
            <div className='r'>
                <img src="/haven1.jpg" alt="HavenHomes Logo" width={120} className=" mb-4"/>
                <h1 className="text-sm  md:text-lg font-semibold">
                    Discover your dream home with HavenHomes. We offer a wide range of properties tailored to meet your unique needs and preferences. Explore our listings and find the perfect place to call home.
                </h1>
            </div>

            <div className='flex md:justify-around items-start justify-start flex-col md:flex-row gap-10'>
                <div className='w-[30%]'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-xl font-bold'>
                            Listings
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <Link to='/listings' className='text-white hover:text-slate-100'>Apartments</Link>
                            <Link to='/listings' className='text-white hover:text-slate-100'>Houses</Link>
                            <Link to='/listings' className='text-white hover:text-slate-100'>Villas</Link>
                            <Link to='/listings' className='text-white hover:text-slate-100'>Condos</Link>
                            <Link to='/listings' className='text-white hover:text-slate-100'>Townhouses</Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>
                        Help
                    </h1>
                    <div className='flex flex-col gap-3'>  
                       
                        <Link to='/contact' className='text-white hover:text-slate-300'>Contact Us</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold'>
                        Get in Touch
                    </h1>
                    <div className='flex flex-col gap-5'>
                        <a href="mailto:haven@homes.com" className='text-white hover:text-slate-300'>haven@homes.com</a>
                        <a href="tel:+15563243457" className='text-white hover:text-slate-300'>+1 556 324 3457</a>
                    </div>
                    <p>1234 Elm Street, New York, NY 10001</p>
                </div>
            </div>   

            <div className='flex md:justify-between justify-center items-center flex-col gap-2 md:flex-row '>
                <div>
                    &copy; {new Date().getFullYear()} HavenHomes. All rights reserved.
                </div>

                <div>
                    <Link to='/terms' className='text-white hover:text-slate-300'>Terms & Conditions</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;
