import Link from 'next/link'
import styles from '../styles/post-preview.module.scss'
import CoverImage from './cover-image'
import Date from './date'

type Props = {
    title: string,
    coverImage: string,
    date: string,
    slug: string,
    excerpt: string
}

const PostPreview = ({title, coverImage, date, slug, excerpt}:Props) => {
    return (
        <div className={styles.PostPreview}>
            <div className={styles.imageContainer}>
                <CoverImage slug={slug} title={title} src={coverImage}/>
            </div>
            <h3>
                <Link as={`/posts/${slug}`} href="posts/[slug]">
                    <a>{title}</a>
                </Link>
            </h3>
            <div className={styles.date}>
                <Date dateString={date}/>
            </div>
            <p>{excerpt}</p>
        </div>
    )
}

export default PostPreview