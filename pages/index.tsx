import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

export interface PageProps {}

export default function Page(props: PageProps) {
	return (
		<Container>
			<Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
				Hello, I&apos;m a front-end developer based in Vietnam!
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Pham Minh Hieu
					</Heading>
				</Box>
			</Box>
			<Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
				<Image
					borderColor="whiteAlpha.800"
					borderWidth={2}
					borderStyle="solid"
					maxWidth="100px"
					display="inline-block"
					borderRadius="full"
					src="/images/minh_hieu.jpg"
					alt="Profile Image"
				/>
			</Box>
		</Container>
	)
}
