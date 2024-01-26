import React from 'react'
import Group from '../assets/Group 3 (1).svg'
import messageIcone from '../assets/message-circle.svg'

const Header = () => {
  return (
    <div >
        <header className='p-4 mx-32 bg-blue-50 '>
            <div className='flex justify-between '>
                <div className='relative my-auto'>
                    <span className='text-blue-500 text-2xl font-sora font-semibold break-words'>Doctor</span>
                    <img src={Group} alt="GPlus"  className='absolute -top-2 -right-6 w-8 h-8 '/>
                </div>
                <nav className='space-x-8 ml-16 my-auto '>
                    <a href="" className='text-blue-500 text-base font-sora font-normal break-words'>Home</a>
                    <a href="" className='text-blue-500 text-base font-sora font-normal break-words'>About</a>
                    <a href="" className='text-blue-500 text-base font-sora font-normal break-words'>Services</a>
                    <a href="" className='text-blue-500 text-base font-sora font-normal break-words'>Contact</a>
                </nav>

                <button className=' bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 shadow-xl rounded-full p-4 inline-flex items-start box-border relative  '>
                    <div className=' flex justify-between gap-2'>
                        <img src={messageIcone} alt=""  className='w-6 h-6 '/>
                        <div class="text-white text-18 font-sora font-semibold break-words">Book Now</div>
                    </div>

                </button>
            </div>
           

        </header>
    </div>
  )
}

export default Header