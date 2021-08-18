import styles from '../styles/hero-post.module.scss'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Date from '../components/date'
import TagType from '../types/tag'
import Tags from '../components/tags'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
    tags: TagType[]
}

const HeroPost = ({title, coverImage, date, excerpt, slug, tags}:Props) => {
    return (
        <section className={styles.HeroPost}>
            <div className={styles.coverImage}>
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <div className={styles.postContainer}>           
                <h3>
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a>{title}</a>
                    </Link>
                </h3>

                <Tags tags ={tags} />

                <div className={styles.date}>
                    <Date dateString={date}/>
                </div>
                
                <p>{excerpt}</p>
            </div>
        </section>
    )
}

export default HeroPost