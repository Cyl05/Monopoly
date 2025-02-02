import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import Board from './components/project-comps/Board';

function App() {
	return (
		<HStack w={'100%'} justify={'center'}>
			{/* <Box h={'100vh'} w={'20vw'}></Box> */}
			<Board />
			{/* <Box h={'100vh'} w={'20vw'}></Box> */}
		</HStack>
	);
}

export default App;