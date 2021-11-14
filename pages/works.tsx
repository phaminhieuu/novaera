import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/layout'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbTagent from '../public/images/works/tagent_01.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
	return (
		<Layout title="Works">
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Works
				</Heading>
				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section>
						<WorkGridItem id="tagent" title="Tagent" thumbnail={thumbTagent}>
							A platform for job hunting for developer
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="tagent" title="Tagent" thumbnail={thumbTagent}>
							A platform for job hunting for developer
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Works
