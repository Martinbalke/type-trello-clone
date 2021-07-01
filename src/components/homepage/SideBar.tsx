import { CalendarIcon, CopyIcon, UpDownIcon } from '@chakra-ui/icons';
import { Button, Stack } from '@chakra-ui/react';
import React from 'react';

const SideBar = () => {
	return (
		<Stack direction='column' spacing={4} width='300px' mr='10'>
			<Button
				leftIcon={<CalendarIcon />}
				colorScheme='blue'
				variant='ghost'
        textAlign='start'
        
			>
				Boards
			</Button>
			<Button
				leftIcon={<CopyIcon />}
				colorScheme='blue'
        variant='ghost'
        pl='7'
			>
				Template
			</Button>
			<Button
				leftIcon={<UpDownIcon />}
				colorScheme='blue'
        variant='ghost'
        pl='-1'
			>
				Home
			</Button>
		</Stack>
	);
};

export default SideBar;
