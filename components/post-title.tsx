import { ReactNode } from "react"
import styles from "../styles/post-title.module.scss"

type Props = {
    children?: ReactNode
}
const PostTitle = ({children}:Props) => {
    return (
        <div className={styles.PostTitle}>
            <h1>{children}</h1>
        </div>
        
    )
}

export default PostTitle