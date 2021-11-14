import { ChevronRightIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	Link,
	List,
	UnorderedList,
	ListItem,
	Icon,
	useColorModeValue,
	SimpleGrid,
	GridItem,
} from '@chakra-ui/react'
import { IoLogoFacebook, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import NextLink from 'next/link'
import React from 'react'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

export interface PageProps {}

export default function Page(props: PageProps) {
	return (
		<Layout>
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
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						I&apos;m a junior front-end developer based in Ho Chi Minh - Viet
						Nam with a passion for building and decorating stuff I want. Finding
						and applying new technology is my strength. When not online, I loves
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

				<Section delay={0.3}>
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

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Skills
					</Heading>
					<SimpleGrid columns={[1, 2, 2]} gap={4}>
						<GridItem ml={4}>
							<UnorderedList>
								<ListItem>React</ListItem>
								<ListItem>TypeScript</ListItem>
								<ListItem>NextJS</ListItem>
							</UnorderedList>
						</GridItem>
						<GridItem ml={4}>
							<UnorderedList>
								<ListItem>NodeJS</ListItem>
								<ListItem>ASP.NET</ListItem>
							</UnorderedList>
						</GridItem>
					</SimpleGrid>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ♥
					</Heading>
					<Paragraph>
						Art, Music and Singing (My favorite band is OneOkRock)
					</Paragraph>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						On the web
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/phamminhhieu85" target="_blank">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoLogoGithub} />}
								>
									@novaera
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href="https://www.facebook.com/harry.pham.3760"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoLogoFacebook} />}
								>
									@minh_hieu
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="#" target="_blank">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoLogoDiscord} />}
								>
									@novaera
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	)
}
