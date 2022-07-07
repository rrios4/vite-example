import React, {useState, useEffect} from 'react';
import { Select, Flex, Box, Text, Button, Input, InputGroup, InputLeftAddon, useColorModeValue, FormHelperText, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, FormControl, FormLabel, ModalFooter, VStack, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Spinner} from '@chakra-ui/react';
import stateJSONData from '../../data/state_titlecase.json'
// import CustomerTypeOptions from './Customer/CustomerTypeOptions';
// import StateOptions from '../StateOptions';
import formatPhoneNumber from '../../services/formatPhoneNumber';
import { Card } from '../../components'
import { TableContainer } from '@material-ui/core';
import { IoMdPersonAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const customers = () => {
  
  return (
    <div>customers</div>
  )
}

export default customers