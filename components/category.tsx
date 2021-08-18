import PostType from "../types/post"
import styles from "../styles/category.module.scss"
import Link from 'next/link'
import PostPreview from './post-preview'
import TagType from "../types/tag"

type Props = {
    tag: TagType,
    posts: PostType[],
}

const Category = ({tag, posts}:Props) => {
    return (     
        <div className={styles.Category}>
            <h2>Category: {tag.name}</h2>
            {/* <Image alt={tagName} src={tag.tagPictureUrl} height="80" width="80" /> */}

            <h3>{posts.length} posts</h3>
            {posts.map(post => ( 
                    <PostPreview  
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            slug={post.slug}
                            excerpt={post.excerpt}
                            tags={post.tags}
                    />
                ))}
        </div> 
    )
}

export default Category