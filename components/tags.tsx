import Image from 'next/image'
import Link from 'next/link'
import TagType from '../types/tag'
import styles from '../styles/tags.module.scss'

type Props = {
    tag: TagType
}

const Tags = ({tag}:Props) => {
    return (
        <div className={styles.Tags}>
            <Image alt={tag.name} src={tag.tagPictureUrl} height="40" width="40"/>

            <Link href={tag.permalink}>
                <a>{tag.name}</a>
            </Link>
        </div>
    )
}

export default Tags