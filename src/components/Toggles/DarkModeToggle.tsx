import React from 'react';
import { Flex, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from 'react-icons/cg'

const DarkModeToggle = () => {
    const {colorMode, toggleColorMode } = useColorMode();[]
  return (
    <Flex align='center' justify='center' height='4rem' direction='column'>
        <Tooltip label='Toggle Dark Mode'>
            <IconButton onClick={() => toggleColorMode()} fontSize='35px' colorScheme='yellow' variant='ghost' aria-label='Toggle Dark Mode' icon={<CgDarkMode />}/>
        </Tooltip>
    </Flex>
  )
}

export default DarkModeToggle