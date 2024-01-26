import React from 'react'
import Header from './Header'
import ButtonAppointement from './ButtonAppointement'
import MessageIcon from '../assets/message-circle.svg'
import Icone from '../assets/icon2.png'

const Presentation = () => {
  return (
    <div className='bg-blue-50 '>
         <Header />
        <div className='relative mt-32'>
            <div className='flex '>
                <div className='w-1/2 p-4  '>
                    <div className=' w-96 mb-4 ml-32'>
                        <span className='text-teal-400 text-lg font-poppins font-medium tracking-wide leading-tight mt-4'>Dr. Matthew Anderson</span>
                        <h1 className='text-navy-900 text-4xl font-poppins font-bold leading-tight mt-4'>
                            A dedicated doctor you can trust
                        </h1>
                        <p className='text-cool-gray-500 text-base font-sora font-normal leading-6 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.
                        </p>
                    </div>
                    <div className='ml-32'>
                            <ButtonAppointement
                                bgColor="bg-gradient-to-r from-[#3a8ef6] to-[#6e39f9] bg-white"
                                imageSrc={MessageIcon}
                                textColor="white"
                                
                            />

                    </div>

                    

                </div>
                <div className='w-1/2 p-4 '>
                    <div className='relative w-96 mx-auto'>
                        <div className='w-96 h-96 bg-gradient-to-r from-[#3a8ef6] to-[#6e39f9] bg-white rounded-full'></div>
                        <img src={Icone} alt="Image Medecin"  className='w-96 h-96 object-cover rounded-full absolute top-0 left-0 z-10 '/>
                   </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Presentation