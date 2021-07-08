import '../styles/global.scss'
import Head from 'next/head'
import type {AppProps} from 'next/app'
import {siteTitle} from '../components/layout'

export default function App({Component, pageProps}: AppProps) {
    
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{siteTitle}</title>
                <link
                    rel="preload"
                    href="/fonts/Inter-roman.latin.var.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </Head>
            <Component {...pageProps} />
    </>
    )
}