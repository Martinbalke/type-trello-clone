import { IconButton } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Text, } from '@chakra-ui/layout';
import React from 'react';
import { Board } from '../../types/boardRelated';
const sampleBackground = require('../../assets/sampleBackground.jpeg')


const BoardPreview = ({backgroundImage, title, favorite}: Board) => {
  return (
    <Flex bgImage={ backgroundImage || sampleBackground} bgPosition='center' bgSize='cover' p='2' m='2'>
      <Text fontSize='l' fontWeight='700' color='white'>{ title }</Text>
      <IconButton aria-label='favorite board' children={<StarIcon fill={favorite ? 'yellow' : 'none' }/>}/>
    </Flex>
  );
};

export default BoardPreview;