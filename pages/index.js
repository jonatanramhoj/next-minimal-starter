import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/jonatanramhoj/next-minimal-starter">Next Minimal Starter</a>
        </h1>

        <div className={styles.packages}>
          <p>The packages included in this starter are</p>
          <ul>
            <li>
              <a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a>
            </li>
            <li>
              <a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>
            </li>
            <li>
              <a href="https://reactjs.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noreferrer">PropTypes</a>
            </li>
            <li>
              <a href="https://styled-components.com/" target="_blank" rel="noreferrer">Styled-components</a>
            </li>
            <li>
              <a href="https://swr.vercel.app/" target="_blank" rel="noreferrer">SWR</a>
            </li>
            <li>
              <a href="https://github.com/garmeeh/next-seo" target="_blank" rel="noreferrer">Next SEO</a>
            </li>
          </ul>
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
