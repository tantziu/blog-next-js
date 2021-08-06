import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getAllPosts, getTagBySlug} from '../lib/api'
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
                tag={heroPost.tag}
                />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    const allPosts = getAllPosts([
      'title', 'date', 'slug', 'coverImage', 'excerpt', 'tag'
    ])
  
    return {
      props: {
        allPosts: allPosts.map(post => ({
          ...post,
          tag: getTagBySlug(post.tag)
        }))
      }
    }
}

