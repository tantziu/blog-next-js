import PostTitle from "./post-title"
import CoverImage from "./cover-image"
import Date from "./date"
import styles from "../styles/post-header.module.scss"
import TagType from "../types/tag"
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    title: string
    coverImage: string
    date: string
    tag: TagType
}

const PostHeader = ({ title, coverImage, date, tag}: Props) => {
    return (
      <div className={styles.PostHeader}>
        <PostTitle>{title}</PostTitle>

        <div className={styles.tag}>
          <Image alt={tag.name} src={tag.tagPictureUrl} height="40" width="40"/>

          <Link href={tag.permalink}>
            <a>{tag.name}</a>
          </Link>
        </div>
        
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