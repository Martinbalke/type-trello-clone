import { RepeatClockIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import BoardPreview from './BoardPreview';

interface Props {
  recentlyViewed: [Board],
  boards: [Board]
}

interface Board {
  title: string,
  favorite: boolean,
  backgroundImage?: string
}

const BoardPreviewContainer = ({ recentlyViewed, boards }: Props) => {
  return (
		<Flex flexDirection='column'>
			<Flex>
				<Box>
          <RepeatClockIcon />
          <Heading>Recently Viewed</Heading>
          <Flex>
            {recentlyViewed.map(board => <BoardPreview title={board.title} favorite={ board.favorite}/>) }
          </Flex>
				</Box>
			</Flex>
      <Flex>
        
      </Flex>
		</Flex>
	);
};

export default BoardPreviewContainer;