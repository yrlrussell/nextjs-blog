import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My impression of my first month as a CPE 3rd Year Student</p>
        <p>The first month as a 3rd year student is very exciting and
       challenging. Exciting because they introduced to us the fundamental
        concepts like digital logic and etc. <p>

          <p>I know now  how to update a website </p>
          <p>We are Trying to build a sample website using: <a href = "https://nextjs.org/learn"> our next js tutorial</a> </p>
        </p>

          
        </p>
      </section>
    </Layout>
  );
}