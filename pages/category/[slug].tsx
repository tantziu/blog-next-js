import Layout from '../../components/layout'
import Container from '../../components/container'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'
import {getAllPosts, getAllTags, getTagBySlug} from '../../lib/api'
import TagType from '../../types/tag'
import Link from 'next/link'

type Props = {
    tag: TagType,
    tags: TagType[]
}

const Tag = ({tag}:Props) => {
    return (
        <Layout> 
            <Container>
                <div className="tag">
                    <h1>{tag.name}</h1>
                    <Image alt={tag.name} src={tag.tagPictureUrl} height="80" width="80" />

                    <h2>Posts</h2>
                    {console.log("posts:", tag.posts)}
                    <ul>
                        {tag.posts.map(post => (
                            <li key={post.slug}>
                                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                                    <a>{post.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>

        </Layout>

    )
// }

// type Params = {
//     params: {
//         tag: string
//     }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allPosts = getAllPosts([
        'title', 'date', 'slug', 'tag'
    ]);
    {console.log("allPosts:", allPosts)}
    const tag = getTagBySlug(params.slug)
    return {
      props: {
        tag: {
            ...tag,
            posts: allPosts.filter(post => post.tag.includes(tag.slug)),
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
