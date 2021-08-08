import Layout from '../../components/layout'
import Container from '../../components/container'
import TagType from '../../types/tag'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getAllTags } from '../../lib/api'

type Props = {
  categories: TagType[]
}

export default function Categories({categories}:Props) {
  return (
    <Layout> 
      <Container>
        <div className="categories">
          <h1>Categories</h1>
          {categories.map(tag => (
            <div key={tag.slug}>
              <h2>
                <Link href={tag.permalink}>
                  <a>{tag.name}</a>
                </Link>
              </h2>

              <Image alt={tag.name} src={tag.tagPictureUrl} height="80" width="80"/>
              <p>{tag.posts.length}post(s)</p>
              <Link href={tag.permalink}>
                <a>Go to posts →</a>
              </Link>
            </div>
          ))}
        </div>

      </Container>
    </Layout>
  )
    
}

export function getStaticProps() {
  return {
    props: {
      categories: getAllTags().map(tag => ({
        ...tag,
        posts: getAllPosts().filter(post => post.tag === tag.slug)
      }))
    }
  }
}