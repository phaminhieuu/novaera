import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Container, Heading } from '@chakra-ui/layout'
import { Button, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'

export interface PageProps {}

export default function Page(props: PageProps) {
	return (
		<Container>
			<Box
				borderRadius="lg"
				p={3}
				mb={6}
				textAlign="center"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			>
				Hello, I&apos;m a front-end developer based in Ho Chi Minh!
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Pham Minh Hieu
					</Heading>
					<p>(-- Stop talking - Keep listening --)</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					textAlign="center"
				>
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
			</Box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>
					I&apos;m a junior front-end developer based in Ho Chi Minh - Viet Nam
					with a passion for building and decorating stuff I want. Finding and
					applying new technology is my strength. When not online, I loves
					singing and hanging out with my friends.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My porfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1999</BioYear>
					Born in Vung Tau city, Viet Nam.
				</BioSection>
				<BioSection>
					<BioYear>2020</BioYear>
					Internship at front-end dev position at SNA company
				</BioSection>
				<BioSection>
					<BioYear>2021</BioYear>
					Completed Software Engineering major at FPT University
				</BioSection>
				<BioSection>
					<BioYear>2021 to present</BioYear>
					Update soon...
				</BioSection>
			</Section>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>
					Art, Music and Singing (My favorite band is OneOkRock)
				</Paragraph>
			</Section>
		</Container>
	)
}
