import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.container}>
          <h3>
            2021 © Tania Ianovitchi.
          </h3>
          <div className={styles.buttons}>
            <a href="https://nextjs.org/docs/basic-features/pages">
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className={styles.transparentButton}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
