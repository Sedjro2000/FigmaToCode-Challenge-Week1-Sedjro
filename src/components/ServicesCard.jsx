import React from 'react'
import WhatsappIcon from '../assets/whatsapp.svg'
import ButtonAppointement from './ButtonAppointement';

const ServicesCard = ({ title, imageSrc }) => {
 
  return (
    <>

      


    {/**CARD ECTION */}
     <div className='border  bg-white max-w-sm w-65 rounded overflow-hidden shadow-lg mx-auto justify-center'>
      {/** Image */}
      <img src={imageSrc} alt={title} />
      
      {/** Section de Texte */}
      <div className='px-6 py-4'>
        {/** Title */}
        <div className='text-wrapper text-black text-2xl font-poppins font-medium leading-5 break-words'>
          {title}
        </div>
        
        {/** Description */}
        <p className='text-gray-700 text-base font-sora font-normal leading-5 break-word mt-2'>
          Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc
        </p>
        
        {/** Bouton d'Appointement */}
        <ButtonAppointement
          bgColor="bg-gradient-to-r from-[#3a8ef6] to-[#6e39f9] bg-white"
          imageSrc={WhatsappIcon}
          textColor="white"
        />
      </div>
    </div>
    </>
  );
};

export default ServicesCard;
