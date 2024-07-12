import React, { useState, useEffect } from 'react';

const images = [
  '/house1.jpg',
  '/house2.jpg',
  '/house3.jpeg',
  '/house4.jpg'
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mx-auto mt-4 h-[100%] p-3 bg-blue-100 rounded-2xl ">
      <div className="">
        <img src={images[current]} alt={`slide${current + 1}`} className="w-full h-[400px] md:h-[700px] rounded-lg object-cover" />
        
      </div>
    </div>
  );
};

export default ImageSlider;
