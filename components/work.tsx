import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ReactChild, ReactChildren } from 'react'

export type TitleProps = {
	children: ReactChild[] | ReactChild
}

export type WorkImageProps = {
	src: string
	alt: string
}

export type MetaProps = {
	children: ReactChild
}

export const Title = ({ children }: TitleProps) => (
	<Box>
		<NextLink href="/works">
			<Link>Works</Link>
		</NextLink>
		<span>
			&nbsp;
			<ChevronRightIcon />
			&nbsp;
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

export const WorkImage = ({ src, alt }: WorkImageProps) => (
	<Image borderRadius="lg" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: MetaProps) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
)
