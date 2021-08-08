import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getAllPosts, getTagsBySlug} from '../lib/api'
import { GetStaticProps } from 'next'
import Post from '../types/post'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/heroPost'
import Intro from '../components/intro'


type Props = {
  allPosts: Post[]
}

export default function Home({allPosts}: Props) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    console.log("tags:", heroPost.tags)
    return (
        <Layout>
            <Head>
            <title>{siteTitle}</title>
            </Head>
    
            <Container>
            <Intro />
            {heroPost && (
                <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                tags={heroPost.tags}
                />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    const allPosts = getAllPosts([
      'title', 'date', 'slug', 'coverImage', 'excerpt', 'tags'
    ])
  
    return {
      props: {
        allPosts: allPosts.map(post => ({
          ...post,
          tags: getTagsBySlug(post.tags)
        }))
      }
    }
}

