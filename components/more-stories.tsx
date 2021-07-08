import Post from '../types/post'
import styles from '../styles/more-stories.module.scss'
import PostPreview from './post-preview'

type Props ={
    posts: Post[]
}

const MoreStories = ({posts}:Props) => {
    return (
        <section className={styles.MoreStories}>
            <h2>More Stories</h2>
            <div className={styles.posts}>
                {posts.map((post) => (
                    <PostPreview  
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}

export default MoreStories
