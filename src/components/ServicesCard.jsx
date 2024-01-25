import React from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import ImageCard1 from '../assets/02 - Semiología.png'

const ServicesCard = () => {
  return (
    <>
      <div className='border border-blue-900 max-w-sm rounded overflow-hidden shadow-lg'>
        {/**image */}
        
          <img src={ImageCard1} alt="Seminologia" />
          {/**Section de Texte */}
          <div className='px-6 py-4'>
            {/**Title */}
            <div className='font-bold text-xl mb-2'>
              General
            </div>
            {/**Description */}
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc
            </p>

          </div>

        
      </div>
    </>
  );
};

export default ServicesCard;
