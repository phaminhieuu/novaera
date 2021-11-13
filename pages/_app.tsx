import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../lib/theme'
import Fonts from '../components/font'

function Website({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	)
}

export default Website
