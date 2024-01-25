import React from 'react';
import ServicesCard from './ServicesCard';
import ImageCard1 from '../assets/02 - Semiología.png';
import ImageCard2 from '../assets/icon1.png'
import ImageCard3 from '../assets/Rectangle 1080.png'
import ImageCard4 from '../assets/healthy copia (1).png'
import ImageCard5 from '../assets/00 - Ciencias Básicas.png'
import ImageCard6 from '../assets/ambulance copia.png'

const ServiceSection = () => {
  const servicesData = [
    { title: 'General', imageSrc: ImageCard1 },
    { title: 'Pediatrics', imageSrc: ImageCard2 },
    { title: 'Nutritional', imageSrc: ImageCard3 },
    { title: 'Cardiology', imageSrc: ImageCard4 },
    { title: 'Ophthalmology', imageSrc: ImageCard5 },
    { title: 'Ophthalmology', imageSrc: ImageCard6 },
  ];

  return (
    <div className='  bg-blue-50 border   '>
        <div className='border   w-96 ml-32  flex flex-col justify-start items-start gap-2'> 
            <div className='text-teal-500 text-2xl font-poppins font-semibold tracking-wide break-words w-64 '>
            Services
            </div>
             <h1 className='text-navy-blue-900 text-2xl font-poppins font-semibold break-words w-96'>Experienced in multiple medical practices</h1>
             <p className='text-blue-gray-500 text-base font-sora font-normal leading-6 break-words w-96'>orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra turpis habitant eu sociis fermentum felis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {servicesData.map((service, index) => (
              <ServicesCard key={index} title={service.title} imageSrc={service.imageSrc} />
            ))}
        </div>
    </div>
   
  );
};

export default ServiceSection;
