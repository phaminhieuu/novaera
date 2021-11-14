import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Tagent">
			<Container>
				<Title>
					Tagent <Badge>2021</Badge>
				</Title>
				<P>A platform for job hutting for developer</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://tagent.vn/">
							https://tagent.vn/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ReactJS - TypeScript, ASP.Net Core</span>
					</ListItem>
				</List>
				<WorkImage src="/images/works/tagent_02.jpg" alt="Tagent" />
				<WorkImage src="/images/works/tagent_03.jpg" alt="Tagent" />
			</Container>
		</Layout>
	)
}

export default Work
