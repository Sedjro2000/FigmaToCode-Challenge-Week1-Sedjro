import React from 'react'
import FBlogo from '../assets/facebook.svg'
import YTlogo from '../assets/youtube.svg'
import WPlogo from '../assets/whatsapp.svg'
import Plus from '../assets/plus.svg'

const Footer = () => {
  return (
    <>
    <div className='bg-blue-500 text-white p-4 w-full '>

     <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Section Doctor */}
        <div className=" w-auto h-auto">
           
        <div className="relative w-auto h-auto flex items-center">
            
        <img src={Plus} alt="Icone" className="w-8 h-8 absolute top-0 right-0 mt-4 mr-4" />
            
          </div>
          <h3 className="text-lg font-semibold mb-2 mr-4">Doctor</h3>
          <p className='w-471 h-auto'>8 W. South St.Buford, GA 30518 5Briarwood LaneVienna, VA 22180 RER</p>
            <div className="flex space-x-4 mt-4">
            <img src={FBlogo} alt="Facebook Logo" className="w-6 h-6" />
            <img src={YTlogo} alt="YouTube Logo" className="w-6 h-6" />
            <img src={WPlogo} alt="WhatsApp Logo" className="w-6 h-6" />
            </div>
         </div>

        {/* Section Company Info */}
        <div className="w-auto h-auto">
          <h3 className="text-lg font-semibold mb-2">Company Info</h3>
            <div className="flex flex-col">
                <a href="" className="mb-2">About</a>
                <a href="" className="mb-2">Services</a>
                <a href="" className="mb-2">Blog</a>
            </div>
        </div>

        {/* Section Book Now */}
        <div className="w-auto h-auto">
          <h3 className="text-lg font-semibold mb-2">Book Now</h3>
          <a href="">Appointement</a>
        </div>

        {/* Section Contact */}
        <div className="w-auto h-auto">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className='flex flex-col'>
            <a href="">+1 123456789</a>
            <a href="">remmcal@mail.com</a>
            <a href="">Phone: +1 12345678</a>
           </div>
        </div>

     </div>
     
              {/* Ligne*/}
              <div className="w-full h-full opacity-60 border border-white mt-4"> </div>

              <div className="opacity-80 text-center text-white text-base font-sora font-normal break-all">
      © Doctor all rights 2023 - Designed by remmcal
    </div>

    
   
     </div>
     

    </>
   
  )
}

export default Footer