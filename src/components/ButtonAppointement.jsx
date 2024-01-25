import React from 'react'
import WPIcon from '../assets/WhatsappIcon.svg'

const ButtonAppointement = () => {
  return (
    <button className="bg-white  py-2 px-4 rounded-full flex items-center">
        <img src={WPIcon} alt=" Whatsapp" className="w-5 h-5 mr-2" />
        <span className="text-blue-500 text-lg font-sora font-semibold">Book an appointment</span>
    </button>
  )
}

export default ButtonAppointement