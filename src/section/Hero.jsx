import React from 'react'
import ImageSlider from '../components/ImageSlider'

const Hero = () => {
  return (
    <div>
        <section className='flex flex-col gap-16'>
            <div className='w-[80%] mx-auto text-center p-3'>
                <h1 className='text-xl md:text-3xl font-bold'>Welcome to HavenHomes</h1>
                <p className='mt-5 font-medium text-base md:text-lg'>
                    Discover exceptional properties and unparalleled service tailored to your needs.
                </p>
            </div>
            <div className='w-[90%]  mx-auto text-center p-3 rounded-3xl h-[100%]'>
                <ImageSlider/>
            </div>
        </section>
    </div>
  )
}

export default Hero