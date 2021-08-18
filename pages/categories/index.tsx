import Layout from '../../components/layout'
import Container from '../../components/container'
import TagType from '../../types/tag'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getAllTags } from '../../lib/api'
import styles from '../../styles/categories.module.scss'

type Props = {
  categories: TagType[]
}

export default function Categories({categories}:Props) {
  return (
    <Layout> 
      <Container>
        <div className={styles.Categories}>
          <h1>Categories</h1>
          {categories.map(tag => (
            <div key={tag.slug} className={styles.tag}>
              

              <Image alt={tag.name} src={tag.tagPictureUrl} height="80" width="80" className={styles.image}/>
              <div className={styles.details}>
                <h2>
                  {/* <Link href={tag.permalink}>
                    <a>{tag.name}</a>
                  </Link> */}
                  {tag.name}
                </h2>
                <p> {tag.posts.length} post(s)</p>
                
                <Link href={tag.permalink}>
                  <a>Go to posts →</a>
                </Link>
              </div>
              
            </div>
          ))}
        </div>

      </Container>
    </Layout>
  )
    
}

export function getStaticProps() {
  const allPosts = getAllPosts([
    'title', 'date', 'slug', 'coverImage', 'excerpt', 'tags',
  ]);
  return {
    props: {
      categories: getAllTags().map(tag => ({
        ...tag,
        posts: allPosts.filter(post => post.tags.includes(tag.slug))
      }))
    }
  }
}
