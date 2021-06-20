import { IconButton } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Text,Box } from '@chakra-ui/layout';
import React from 'react';
import { Board } from '../../types/boardRelated';
import Image from 'next/image';
import sampleBackground from '/sampleBackground.jpeg'

const BoardPreview = ({ backgroundImage, title, favorite }: Board) => {
	return (
		<Flex
			m='2'
			position='relative'
			height='125px'
			width='250px'
			borderRadius='5px'
			overflow='hidden'
		>
			<Box w='100%' h='100%' position='absolute' top='0' zIndex='-1'>
				<Image src='/sampleBackground.jpeg' layout='fill' />
			</Box>
			<Text fontSize='xl' fontWeight='700' color='white' m='4'>
				{title}
			</Text>
			<IconButton
				variant='ghost'
				aria-label='favorite board'
				position='absolute'
				bottom='0'
				right='0'
        color={favorite ? 'gold' : 'black'}
        _hover={{ bg: 'none', color: favorite ? 'black' : 'gold' }}
        // onClick={ () => favorite = !favorite }
				children={<StarIcon />}
			/>
		</Flex>
	);
};

export default BoardPreview;
