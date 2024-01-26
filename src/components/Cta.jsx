import React from 'react'
import ButtonAppointement from './ButtonAppointement'
import Whatsapp from '../assets/whatsapp.svg'

const CTA = () => {
  return (
    <>
        <div>
            <div className="w-full text-center text-teal-500 text-2xl  tracking-wider break-words font-poppins font-semibold">
                    Book an appointment
            </div>

            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl">
                <div className="w-full text-center text-white text-2xl font-semibold font-poppins">
                    Schedule a virtual or presential appointment today
                </div>
                <div className="w-full opacity-80 text-center text-white text-base font-sora font-normal leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra turpis habitant eu sociis fermentum felis.
                </div>
                
                <ButtonAppointement bgColor="white" imageSrc={Whatsapp} textColor="blue-1" />


            </div>


        </div>
    </>
  )
}

export default CTA