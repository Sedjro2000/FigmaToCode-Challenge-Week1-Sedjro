import React from 'react'
import { Box, Flex, Text, Image } from "@chakra-ui/react";


const Card = () => {
  return (
    <>
    <div className='mt-12 border border-blue-800 w-[402px] pl-4 py-2'>
    <Box
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      gap="8"
      display="inline-flex"
    >
      <Text
        width="402px"
        color="#031432"
        fontSize="16px"
        fontFamily="Poppins"
        fontStyle="italic"
        fontWeight="300"
        wordWrap="break-word"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </Text>
      <Flex
        width="413px"
        justifyContent="flex-start"
        alignItems="center"
        gap="8"
        display="inline-flex"
      >
        <Image src="https://via.placeholder.com/48x48" alt="Profile" w="48px" h="48px" borderRadius="9999" />
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" display="inline-flex">
          <Text
            textAlign="center"
            color="#00BFA5"
            fontSize="18px"
            fontFamily="Poppins"
            fontWeight="500"
            wordWrap="break-word"
          >
            Samy White
          </Text>
          <Text
            textAlign="center"
            color="#6C87AE"
            fontSize="12px"
            fontFamily="Sora"
            fontWeight="400"
            wordWrap="break-word"
          >
            Cardiology Patient
          </Text>
        </Flex>
      </Flex>
    </Box>
    </div>

       
    </>
  )
}

export default Card