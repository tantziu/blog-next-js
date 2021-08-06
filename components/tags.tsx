import Image from 'next/image'
import Link from 'next/link'
import TagType from '../types/tag'
import styles from '../styles/tags.module.scss'

type Props = {
    tags: TagType[]
}

const Tags = ({tags}:Props) => {
    return (
        <div className={styles.Tags}>
            {console.log(tags)}
            <ul>
                {tags.map((tag) => (
                    <li className={styles.tag} key={tag.slug}>
                        <Image alt={tag.name} src={tag.tagPictureUrl} height="40" width="40"/>

                        <Link href={tag.permalink}>
                            <a>{tag.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Tags