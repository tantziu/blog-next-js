import PostTitle from "./post-title"
import CoverImage from "./cover-image"
import Date from "./date"
import styles from "../styles/post-header.module.scss"

type Props = {
    title: string
    coverImage: string
    date: string
}

const PostHeader = ({ title, coverImage, date}: Props) => {
    return (
      <div className={styles.PostHeader}>
        <PostTitle>{title}</PostTitle>
        
        <div className={styles.coverImage}>
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className={styles.date}>
            <Date dateString={date} />
        </div>
      </div>
    )
  }

export default PostHeader