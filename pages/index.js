import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hii ,I am Vaishnavi Boje ,<br/>working on Nextjs Website and Here we go i am done with implementation!!!!!!!!
        It is my first next.js application 
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href='posts/first-post'>
           <a>Its my first post</a>
        </Link>
      </section>
      
    </Layout>
    
  )
}

