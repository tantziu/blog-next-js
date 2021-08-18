import React from 'react'
import Footer from './footer'
import Meta from './meta'
import styles from '../styles/layout.module.scss'
import Header from '../components/header'

const name = 'Tantziu'
export const siteTitle = 'Every day coding'


type Props = {
    children: React.ReactNode
    meta?: any
}

const Layout = ({children, meta}:Props) => {
    return (
        <>
            <Meta meta={meta}/>
            <Header />
            <div className={styles.Layout}>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
