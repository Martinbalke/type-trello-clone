import { RepeatClockIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Board } from '../../types/boardRelated';
import BoardPreviewContainer from './BoardPreviewContainer';

const sampleBoards: Array<Board> = [
	{
		title: 'Some board',
		favorite: true,
	},
	{
		title: 'Some board 2',
		favorite: false,
	},
];

const HomePage = () => {
  return (
    <Flex>
      <BoardPreviewContainer icon={<RepeatClockIcon />} heading='Recenty Viewed' boards={sampleBoards }/>
    </Flex>
  );
};

export default HomePage;