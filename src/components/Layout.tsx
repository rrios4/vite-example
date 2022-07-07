import React from 'react'
import { Navbar } from './'
import { Flex } from '@chakra-ui/react';

interface Props {
    children: React.ReactNode
};

const Layout = (props:Props) => {
  return (
    <Flex>
        <header>
            <Navbar/>
        </header>
        <main>
            {props.children}
        </main>

    </Flex>
  )
}

export default Layout