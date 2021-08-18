import { GetStaticProps, GetStaticPaths} from 'next'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getTagsBySlug} from '../../lib/api'
import Head from 'next/head'
import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css'
import PostType from '../../types/post'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostTitle from '../../components/post-title'
import PostHeader from '../../components/post-header'
import MoreStories from '../../components/more-stories'
import PostBody from '../../components/post-body'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdown'

type Props = {
    post: PostType
    morePosts: PostType[]
    meta?:any
}

const Post = ({post, morePosts, meta}:Props) => {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }

    return (
        <Layout>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading...</PostTitle>
                ) : (
                    <>
                    <article className="mb-32">
                        <Head>
                            <title>
                                {post.title} | Next.js Blog Example with {CMS_NAME}
                            </title>
                            {/* <meta property="og:image" content={post.ogImage.url} /> */}
                        </Head>
                        <PostHeader 
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            tags={post.tags}
                        />
                        <PostBody content={post.content}/>
                    </article>

                    {/* <SectionSeparator /> */}
                        {/* {morePosts && morePosts.length > 0 && (
                            <MoreStories posts={morePosts} />
                        )} */}
                        
                    </>
                )}
            </Container>
        </Layout>
    )

}

type Params = {
    params: {
        slug: string
    }
}

export const getStaticProps:GetStaticProps = async({params}:Params) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'ogImage',
        'coverImage',
        'tags'
    ])
    const content = await markdownToHtml(post.content || '')

    const allPosts = getAllPosts(['title', 'date', 'content', 'coverImage', 'slug', 'tags']);
    // const remainingPosts = allPosts.filter(story => {
    //     if (story.slug != post.slug) 
    //         return story
    // })
    return {
        props: {
            post: {
                ...post,
                content,
                tags : getTagsBySlug(post.tags),
            },
            // morePosts: remainingPosts.map(post => ({
            //     ...post,
            //     tags: getTagsBySlug(post.tags)
            // })), 
        },
    }
}

export const getStaticPaths:GetStaticPaths = async () => {
    const posts = getAllPosts(['slug'])
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                },
            }
        }),
        fallback: false
    }
}

export default Post