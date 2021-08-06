import styles from '../styles/hero-post.module.scss'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Date from '../components/date'
import TagType from '../types/tag'
import Image from 'next/image'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
    tag: TagType
}

const HeroPost = ({title, coverImage, date, excerpt, slug, tag}:Props) => {
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

                    <div className={styles.tag}>
                        <Image alt={tag.name} src={tag.tagPictureUrl} height="40" width="40"/>

                        <Link href={tag.permalink}>
                            <a>{tag.name}</a>
                        </Link>
                    </div>

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