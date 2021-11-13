import { HTMLMotionProps, motion } from 'framer-motion'
import { chakra, HTMLChakraProps, shouldForwardProp } from '@chakra-ui/react'
import { ReactChild } from 'react'

type Merge<P, T> = Omit<P, keyof T> & T

type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)

export type SectionProps = {
	children: ReactChild[] | ReactChild
	delay?: number
}

const Section = ({ children, delay = 0 }: SectionProps) => (
	<MotionBox
		initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.8, delay }}
	>
		{children}
	</MotionBox>
)

export default Section
