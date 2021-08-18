
import Intro from '../components/intro'
import Layout from '../components/layout'
import Container from '../components/container'
import styles from '../styles/about.module.scss'


export default function About() {
  return (
    <Layout> 
      <Container>
      <Intro />
        <section>
          <p>Hi, I'm Tania I.</p>
          <p>(This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
            <div className={styles.projects}>
              <div className={styles.row}>
                <a href="#" className={styles.card}>
                  <h3>Flight Journal &rarr;</h3>
                  <p>Store information about flights</p>
                </a>
                <a href="#" className={styles.card}>
                  <h3>Books Repo &rarr;</h3>
                  <p>My personal phisical collection of books sorted in one small application</p>
                </a>
                <a
                  href="#"
                  className={styles.card}
                >
                  <h3>Examples &rarr;</h3>
                  <p>Find other example boilerplates on the Next.js GitHub.</p>
                </a>
              </div>
            </div>
        </section>
      </Container>
    </Layout>

  )
}
