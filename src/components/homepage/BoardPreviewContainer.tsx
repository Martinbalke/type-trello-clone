import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Board } from '../../types/boardRelated';
import BoardPreview from './BoardPreview';

interface Props {
	heading: string;
	icon: JSX.Element;
	boards: Array<Board>;
}

const BoardPreviewContainer = ({ heading, boards, icon }: Props) => {
	return (
		<Flex flexDirection='column'>
			<Flex>
				<Box>
					<Flex>
					{icon}
					<Heading>{heading}</Heading>
					</Flex>
					<Flex>
						{boards.map(
							(board: Board): JSX.Element => (
								<BoardPreview key={board.title} title={board.title} favorite={board.favorite} backgroundImage={ board.backgroundImage}/>
							)
						)}
					</Flex>
				</Box>
			</Flex>
			<Flex></Flex>
		</Flex>
	);
};

export default BoardPreviewContainer;
