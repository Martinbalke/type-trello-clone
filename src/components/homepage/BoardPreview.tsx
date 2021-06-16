import { IconButton } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';
import { Flex, Text, } from '@chakra-ui/layout';
import React from 'react';
const sampleBackground = require('../../assets/sampleBackground.jpeg')

interface Props {
  background?: string,
  title: string,
  favorite: boolean
 }


const BoardPreview = ({background, title, favorite}: Props) => {
  return (
    <Flex bgImage={ background || sampleBackground} bgPosition='center' bgSize='cover' p='2' m='2'>
      <Text fontSize='l' fontWeight='700' color='white'>{ title }</Text>
      <IconButton aria-label='favorite board' children={<StarIcon fill={favorite ? 'yellow' : 'none' }/>}/>
    </Flex>
  );
};

export default BoardPreview;