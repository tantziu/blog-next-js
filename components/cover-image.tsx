// import cn from 'classnames'
import Link from 'next/link'
import styles from '../styles/cover-image.module.scss'
import cn from 'classnames'

type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({title, src, slug}:Props) => {
    // const classnames = [slug ? "slug":""]
    const image = (
        <img 
            src={src}
            alt={`Cover image for ${title}`}
            // className={slug ? styles.slug: ""}
            className={cn({'slug' : slug})}
            // className={cn({'shadow-small'}, {
            //     'hover:shadow-medium transition-shadow duration-200': slug,
            // })}
        />
    )
    return (
        <div className={styles.CoverImage}>
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage