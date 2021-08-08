
import Intro from '../components/intro'
import Layout from '../components/layout'
import Container from '../components/container'


export default function About() {
  return (
    <Layout> 
      <Container>
      <Intro />
        <section>
          <p>Hi, I'm Tania I.</p>
          <p>(This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
            {/* project cards */}
        </section>
      </Container>
    </Layout>

  )
}