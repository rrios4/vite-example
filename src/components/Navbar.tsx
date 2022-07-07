import React from 'react'
import {Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex position='fixed' w={{base: 'full', lg:'8rem'}} h={{base: '4rem', lg:'100vh'}} bg='gray.700' roundedTopRight={{base: '0', lg:'25'}} roundedBottomRight={{base: '0', lg:'25'}} flexDir={{base: 'row',lg: 'column'}} p='0' m='0' top={{base:'0', lg:'0'}}>
        <Link to={'/'}>
        
        </Link>

    </Flex>
  )
}

export default Navbar