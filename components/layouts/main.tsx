import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import Head from 'next/head'
import React, { ReactChild } from 'react'
import Navbar from '../navbar'
import VocelDog from '../voxel-dog'

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
				<VocelDog />
				{children}
			</Container>
		</Box>
	)
}
