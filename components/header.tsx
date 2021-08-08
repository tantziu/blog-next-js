import { useRouter } from "next/dist/client/router"
import styles from '../styles/header.module.scss'
import Link from 'next/link'
// import cn from 'classnames'

export default function Header() {
    return (
        <header className={styles.Header}>
            <nav className={styles.menu}>
                {/* <ul><li></li></ul> */}
                <Link href="/">Posts</Link>
                {/* <Link href="/posts">Blog</Link> */}
                <Link href="/categories">Categories</Link>
                <Link href="/about">About</Link>
            </nav>
            
        </header>
        
    )
}

// const Link = ({children, href}) => {
//     const router = useRouter()
//     return (
//         <a 
//             href="#" 
//             onClick={(e) => {
//                 e.preventDefault()
//                 router.push(href)
//             }}
//             style={router.asPath === href ?  {color:'red'}: {}}
//         >
//             {children}
//         </a>
//     )

// }