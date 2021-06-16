import React from 'react';
import { Flex, Input, IconButton, InputGroup, InputRightAddon, Avatar, Heading } from '@chakra-ui/react'
import { CalendarIcon, SearchIcon, DragHandleIcon, AddIcon, InfoIcon, BellIcon,   } from '@chakra-ui/icons'

const buttonStyles = {
  mr: '1',
  color: 'white',
  padding: '2',
  height: '2.5rem',
  width: '2.5rem',
  bgColor:'whiteAlpha.400'
}


const Nav = () => {
  return (
		<Flex bgColor='blue.500' color='white' p='1'>
			<Flex>
				<IconButton
					aria-label='Go back to home'
					icon={<CalendarIcon />}
					{...buttonStyles}
				/>
				<IconButton
					aria-label='Open your boards'
					icon={<DragHandleIcon />}
					{...buttonStyles}
				/>
			</Flex>
			<InputGroup width='25%'>
				<Input
					placeholder='Search your boards'
					bgColor='whiteAlpha.400'
					color='white'
					variant='filled'
				/>
        <InputRightAddon
          bgColor='whiteAlpha.400'
          color='white'
          border='none'
					pointerEvents='none'
					children={<SearchIcon />}
				/>
			</InputGroup>
			<Heading
				fontSize='xl'
				fontWeight='700'
				textTransform='uppercase'
				mx='auto'
				alignSelf='center'
			>
				Typelo
			</Heading>
			<Flex ml='6'>
				<IconButton
					aria-label='Create a new board'
					icon={<AddIcon />}
					{...buttonStyles}
				/>
				<IconButton
					aria-label='Learn about the site'
					icon={<InfoIcon />}
					{...buttonStyles}
				/>
				<IconButton
					aria-label='View unread notifactions'
					icon={<BellIcon />}
					{...buttonStyles}
				/>
				<Avatar {...buttonStyles} />
			</Flex>
		</Flex>
	);
};

export default Nav;