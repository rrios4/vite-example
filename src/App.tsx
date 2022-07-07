import { Component, useState } from 'react'
import { Flex, Button, Text } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex ml={{base:'0rem', lg:'8rem'}} mt={{base:'4rem', lg:'0rem'}} justifyContent='center' w={'full'} bg='red'>
      <Text>Home Page</Text>
      <Text>Dashboard</Text>
    </Flex>
  )
}

export default App
