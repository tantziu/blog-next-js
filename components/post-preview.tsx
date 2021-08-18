import Link from 'next/link'
import styles from '../styles/post-preview.module.scss'
import TagType from '../types/tag'
import CoverImage from './cover-image'
import Date from './date'
import Tags from '../components/tags'

type Props = {
    title: string,
    coverImage?: string,
    date: string,
    slug: string,
    excerpt: string,
    tags: TagType[]
}

const PostPreview = ({title, coverImage, date, slug, excerpt, tags}:Props) => {
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
            
            <Tags tags={tags} />
            <div className={styles.date}>
                <Date dateString={date}/>
            </div>
            <p>{excerpt}</p>
        </div>
    )
}

export default PostPreview