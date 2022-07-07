import React from 'react';
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
    width: string;
    bg: string;
    borderColor: string;
}

const Card = ({children, bg, width, borderColor} : Props) => {
  return (
    <Box bg={bg} padding={'20px'} display='flex' flexDirection='column' width={width} position='relative' borderRadius='xl' minWidth='0px' shadow='sm' border={'1px'} borderColor={borderColor}>
        {children}
    </Box>
  )
}

export default Card