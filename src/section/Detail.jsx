import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listData } from '../constants/data'
import Map from "../components/Map"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Footer from './Footer'

const Detail = () => {
    const {slug}= useParams();
     const [detail, setDetail]= useState([]);

     useEffect(()=> {
        const findDetail= listData.filter(property=> property.slug === slug);
        if(findDetail.length > 0) {
            setDetail(findDetail[0])
        }
        
     }, [slug])

     const position1 = [detail.latitude, detail.longitude]
  return (
    <>


   <div className='flex flex-col md:flex-row md:justify-around justify-center items-center md:items-start gap-10 '>
    <section className='w-[80%] md:w-[30%] flex flex-col gap-10'>
        <div className='w-[100%] rounded-lg flex border gap-3 p-2 shadow-2xl items-center h-[500px]' >
            <div className='h-full'>
                <img src={detail.img} alt="" className='h-full object-cover' />
            </div>
            <div className='flex flex-col h-[100%] gap-3'>
                <div className='h-[100%]' >
                    <img src={detail.img1} alt="h-[50%]" className='h-[50%] w-[100%] object-cover'  />
                </div>
                <div className='h-[100%]'>
                    <img src={detail.img2} alt="" className='h-[100%] object-cover' />
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <h1 className='font-semibold text-base md:text-lg'>
                {detail.title}
            </h1>
             <div className='flex gap-5'>
                <img src="/pin.png" alt="" width={20} />
                <p>
                    {detail.address}
                </p>
             </div>
             <h2 className='text-lg font-bold'> {detail.status}: ${detail.price}</h2>

             <p className='w-[100%] font-medium'>
                {detail.description}
             </p>
            
        </div>
    </section>
    <section className='w-[80%] md:w-[30%] flex flex-col gap-8 bg-zinc-50 p-7'>
        <h2 className='font-bold text-lg md:text-2xl'>
            General
        </h2>

        <div className='bg-white p-3 flex flex-col gap-4 rounded-lg shadow-3xl'>

            <div className='flex gap-5 items-center'>
                <img src="/utility.png" alt="" width={20}   />
                <h1>
                    <p className='text-base md:text-lg font-medium'>Utilities</p>
                    <p>Renter is responsible</p>
                </h1>
            </div>

            <div className='flex gap-5 items-center'>
                <img src="/pet.png" alt="" width={20} />
                <h1>
                    <p className='text-base md:text-lg font-medium'>Pet Policy</p>
                    <p>Pets Allowed</p>
                </h1>
            </div>

            <div className='flex gap-5 items-center '>
                <img src="/fee.png" alt="" width={20}  />
                <h1>
                    <p className='text-base md:text-lg font-medium'>Property Fees</p>
                    <p>Must have 3x the price in total household income</p>
                </h1>
            </div>

        </div>

        <div className='flex gap-6 flex-col'>
            <h1 className='text-lg md:text-xl '>
                Room Sizes
            </h1>

            <section className='flex md:justify-between flex-col md:flex-row justify-center gap-3'>
                <div className='flex gap-1 items-center bg-white p-2 font-medium'>
                    <img src="/bath.png" alt="" width={20} />
                    <p>{detail.bathroom} Bathroom</p>
                </div>
                <div className='flex gap-1 items-center bg-white p-2 font-medium'>
                    <img src="/bed.png" alt="" width={20} />
                    <p>{detail.bedroom} Bedroom</p>
                </div>

            </section>
        </div>

        <div className='flex gap-6 flex-col'>
            <h1 className='md:font-semibold text-lg  md:text-xl font-medium'>
                Nearby Places
            </h1>

            <section className='bg-white justify-between p-5 flex md:items-center rounded-lg shadow-2xl flex-col gap-3 md:flex-row '>
                <div className='flex gap-3 flex-col'>
                    <img src="/sch.png" alt="" width={20} />
                    <h1>
                        <p>School</p>
                        <span>{detail.school}</span>
                    </h1>
                </div>

                <div className='flex gap-3 flex-col'>
                    <img src="/pet.png" alt="" width={20} />
                    <h1>
                        <p>Bus Stop</p>
                        <span>{detail.bus}</span>
                    </h1>
                </div>

                <div className='flex gap-3 flex-col'>
                    <img src="/fee.png" alt="" width={20} />
                    <h1>
                        <p>Restaurant</p>
                        <span>{detail.restaurant}</span>
                    </h1>
                </div>
            </section>

        </div>

        <div className='flex flex-col gap-10'>
            <h1 className='font-semibold text-lg'>
                Contact 
            </h1>

            <section>
                <div className='flex justify-between bg-white p-3 w-[100%] mx-auto gap-6'>
                    <img src="/email.svg" alt="" width={20} />
                    <p>
                        <a href="mailto:smrtwells@gmail.com" className='font-medium'>Chat with Owner</a>
                    </p>
                </div>
            </section>
        </div>

        <div>
            <h1>
                Location
            </h1>
            <section className='w-[100%]'>

                 <div className="w-[100%] h-96">
      <MapContainer center={[52.4797, -1.90269]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.4797, -1.90269]}>
          <Popup>
            <div className='font-montserrat text-xs'>
                <h3>
                    {detail.title}
                </h3>
                <img src={detail.img} alt="" />
                <p className='font-montserrat'>${detail.price}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>

            </section>
        </div>

    </section>


   </div>

   <div className='mt-24'>
    <Footer/>
   </div>

   </>
  )
}

export default Detail