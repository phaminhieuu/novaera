import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/font'

function Website({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	)
}

export default Website
