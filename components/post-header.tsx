import PostTitle from "./post-title"
import CoverImage from "./cover-image"
import Date from "./date"
import styles from "../styles/post-header.module.scss"
import TagType from "../types/tag"
import Image from 'next/image'
import Link from 'next/link'
import Tags from "./tags"

type Props = {
    title: string
    coverImage: string
    date: string
    tags: TagType[]
}

const PostHeader = ({ title, coverImage, date, tags}: Props) => {
    return (
      <div className={styles.PostHeader}>
        <PostTitle>{title}</PostTitle>

        <Tags tags={tags} />
        
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