import { useRouter } from "next/dist/client/router"
import styles from '../styles/header.module.scss'
import Link from 'next/link'
import React from 'react'
// import cn from 'classnames'

export default function Header() {
    const random = "blue"
    return (
        <header className={styles.Header}>
            <nav className={styles.menu}>
                {/* <ul><li></li></ul> */}
                <MenuItem href="/posts">Posts</MenuItem>
                {/* <Link href="/posts">Blog</Link> */}
                <MenuItem href="/categories">Categories</MenuItem>
                <MenuItem href="/about">About</MenuItem>
            </nav>
            
        </header>
        
    )
}

const MenuItem = ({children, href}) => {
    const router = useRouter()
    let className = ''

    
    if (router.pathname === href || router.pathname.includes(href)) {
        className = styles.selected
    }

    return (
        <Link href={href}>
            <a className={`${styles.item} ${children} ${className}`}>{children}</a>
        </Link>
    )
}
