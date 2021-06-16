import { ChakraProvider} from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import theme from './theme';
function MyApp({ Component, pageProps }: AppProps) {
	return (
    <ChakraProvider theme={ theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
