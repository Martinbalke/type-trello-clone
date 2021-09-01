import { TimeIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import React, { useContext} from 'react';
import { observer } from 'mobx-react-lite';
import Store from '../../store';
import BoardPreviewContainer from './BoardPreviewContainer';
import SideBar from './SideBar';

const HomePage = () => {
	const store = useContext(Store);
	const { boards } = store;

	return (
		<Flex my='10' mx='24'>
			<SideBar />
			<BoardPreviewContainer
				icon={<TimeIcon h='40px' w='30px' />}
				heading='Recenty Viewed'
				boards={boards}
			/>
		</Flex>
	);
};

export default observer(HomePage);
