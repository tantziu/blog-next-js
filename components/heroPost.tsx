import styles from '../styles/hero-post.module.scss'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Date from '../components/date'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
}

const HeroPost = ({title, coverImage, date, excerpt, slug}:Props) => {
    return (
        <section className={styles.HeroPost}>
            <div className={styles.coverImage}>
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <div className={styles.postContainer}>
                <div>
                    <h3>
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a>{title}</a>
                        </Link>
                    </h3>
                    <div className={styles.date}>
                        <Date dateString={date}/>
                    </div>
                </div>
                <div>
                    <p>{excerpt}</p>
                </div>
            </div>
        </section>
    )
}

export default HeroPost