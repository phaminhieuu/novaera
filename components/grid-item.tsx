import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactChild } from 'react'

export type GridItemProps = {
	children: ReactChild
	href: string
	title: string
	thumbnail: StaticImageData
}

export type WorkGridItemProps = {
	children: ReactChild | string
	id: string
	title: string
	thumbnail: StaticImageData
}

export const GridItem = ({
	children,
	href,
	title,
	thumbnail,
}: GridItemProps) => (
	<Box w="100%" align="center">
		<LinkBox>
			<Image
				src={thumbnail}
				alt={title}
				className="grid-item-thumbnail"
				placeholder="blur"
				loading="lazy"
			/>
			<LinkOverlay href={href} target="_blank">
				<Text mt={2}>{title}</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkGridItem = ({
	children,
	id,
	title,
	thumbnail,
}: WorkGridItemProps) => (
	<Box w="100%" align="center">
		<NextLink href={`/works/${id}`}>
			<LinkBox cursor="pointer">
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeholder="blur"
				/>
				<LinkOverlay href={`/works/${id}`}>
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				</LinkOverlay>

				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
	</Box>
)

export const GridItemStyle = () => (
	<Global
		styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
	/>
)
