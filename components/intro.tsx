import styles from '../styles/intro.module.scss'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className={styles.Intro}>
            <Image
                src="/images/profile.jpg" // Route of the image file
                height={144} 
                width={144} 
                alt="Tania"
                className={styles.image}
            />
            <h1>Tania I. </h1>
            <h4>Daily documentating the code</h4>

            {/* <div>
                Twitter [@yourname](https://twitter.com/yourname)
                <br />
                GitHub [@yourname](https://github.com/yourname)
                <br />
                Instagram [@yourname](https://instagram.com/yourname)
                <br />
                Email your@name.com
            </div> */}
        </section>
    )
}

export default Intro