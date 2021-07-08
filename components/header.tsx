import { useRouter } from "next/dist/client/router"
import styles from '../styles/header.module.scss'
// import cn from 'classnames'

export default function Header() {
    return (
        <header className={styles.Header}>
            <nav className={styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
        
    )
}

const Link = ({children, href}) => {
    const router = useRouter()
    return (
        <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault()
                router.push(href)
            }}
            style={router.asPath === href ?  {color:'red'}: {}}
        >
            {children}
        </a>
    )

}