import React, { ReactChild } from 'react'
import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'

export interface MainProps {
	children: ReactChild
	router: Router
}

export default function Main({ children, router }: MainProps) {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>NovaEra - Homepage</title>
			</Head>

			<Navbar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				{children}
			</Container>
		</Box>
	)
}