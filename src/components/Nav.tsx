import React from 'react';
import { Flex, Input, Text, IconButton, InputGroup, InputRightAddon, Button } from '@chakra-ui/react'
import { CalendarIcon, SearchIcon, DragHandleIcon, AddIcon, InfoIcon, BellIcon,   } from '@chakra-ui/icons'

const buttonStyles = {
  
}


const Nav = () => {
  return (
		<Flex bgColor='blue.700'>
			<IconButton aria-label='Go back to home' icon={<CalendarIcon />} />
			<IconButton aria-label='Open your boards' icon={<DragHandleIcon />} />
			<InputGroup>
				<Input defaultValue='Search your boards'/>
				<InputRightAddon />
			</InputGroup>
			<Text fontSize='md' fontWeight='medium'>
				Typelo
			</Text>
			<IconButton aria-label='Create a new board' icon={<AddIcon/>} />
			<IconButton aria-label='Learn about the site' icon={<InfoIcon/>} />
      <IconButton aria-label='View unread notifactions' icon={<BellIcon />} />
      <Button bgColor='gray.500' value='U' fontSize='m' fontWeight='bold' borderRadius='50%' aria-label='User info' />
		</Flex>
	);
};

export default Nav;