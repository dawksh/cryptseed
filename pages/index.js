import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h3 className={styles.title}>CryptSeed</h3>
      <p className={styles.description}>
        CryptSeed is a solution for all your seed phrases. Save seed phrases, inside your browser, encrypted.
        <br />
        Your precious seed phrase doesn't leave the browser.
      </p>

      <div className={styles.btnGrp}>
        <button className={styles.button} type="submit"><Link href="/auth">Join Now</Link></button>
        <button className={styles.button} type="submit"><Link href="/auth">Login</Link></button>
      </div>

    </div>
  )
}
