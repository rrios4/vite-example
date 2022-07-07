import React from 'react';
import { Flex, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from 'react-icons/cg';
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const DarkModeToggle = () => {
    const {colorMode, toggleColorMode } = useColorMode();[]
  return (
    <Flex align='center' justify='center' height='4rem' direction='column'>
        <Tooltip label={colorMode === 'light' ? 'Toggle Dark Mode' : 'Toggle Light Mode'}>
            <IconButton onClick={() => toggleColorMode()} fontSize='35px' colorScheme={colorMode === 'light' ? 'yellow' : 'yellow'} variant='ghost' aria-label='Toggle Dark Mode' icon={colorMode === 'light' ? <MdDarkMode />: <MdLightMode/> }/>
        </Tooltip>
    </Flex>
  )
}

export default DarkModeToggle