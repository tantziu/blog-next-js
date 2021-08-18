import Layout from '../../components/layout'
import Container from '../../components/container'
import { GetStaticProps, GetStaticPaths } from 'next'
import {getAllPosts, getAllTags, getTagBySlug, getTagsBySlug} from '../../lib/api'
import TagType from '../../types/tag'
import Category from '../../components/category'

type Props = {
    tag: TagType,
    // tags: TagType[]
}

const Tag = ({tag}:Props) => {
    return (
        <Layout> 
            <Container>
                <Category tag={tag} posts={tag.posts}/>
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allPosts = getAllPosts([
        'title', 'date', 'slug', 'tags', 'excerpt', 'coverImage', 'content', 'ogImage'
    ]);
    const tag = getTagBySlug(params.slug)
    const tagPosts = allPosts.filter(post => post.tags.includes(tag.slug))
    return {
      props: {
        tag: {
            ...tag,
            posts: tagPosts.map(post => ({
                ...post,
                tags: getTagsBySlug(post.tags)
            })),
        }
      },
    }
}

export const getStaticPaths = /* async */ () => {
    // const tags = await getAllTags()
    const tags = getAllTags()
    const paths = tags.map(tag => ({
        params: {
            slug: tag.slug
        },
    }));

    return {paths, fallback: false}
}

export default Tag