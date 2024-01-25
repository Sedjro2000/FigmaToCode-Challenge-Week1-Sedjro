import React from 'react'
import Card from './Card'

const Reviews = () => {
  return (
    <>
        <div>
            <div className=' relative w-[676px]  h-auto    mx-auto'>
            <h1 className="  text-center text-gray-800 whitespace-normal text-3xl font-poppins font-semibold break-all">
                What our great customers say about Dr.Matthew Anderson
            </h1>
            </div>
            <div  className=' relative w-[676px] h-[44px] p-2  mx-auto'>
            <p className="w-full h-full text-center text-sora text-6C87AE text-base font-normal leading-6 break-all">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            </div>
        </div>
            <div className='flex gap-4'>
            <Card />
            <Card />
            </div>
            <div className='flex gap-4'>
            <Card />
            <Card />
            </div>
          

            

            

       
    </>
  )
}

export default Reviews