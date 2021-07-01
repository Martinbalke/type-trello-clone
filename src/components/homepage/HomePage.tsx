import { RepeatClockIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Board } from '../../types/boardRelated';
import BoardPreviewContainer from './BoardPreviewContainer';
import SideBar from './SideBar';

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
		<Flex my='10' mx='24'>
			<SideBar/>
      <BoardPreviewContainer  icon={<RepeatClockIcon h='40px' w='30px' />} heading='Recenty Viewed' boards={sampleBoards }/>
    </Flex>
  );
};

export default HomePage;