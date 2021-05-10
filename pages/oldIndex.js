import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

import { Flex, Heading, Button, Text } from '@chakra-ui/react'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptseed | Your private keys vault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Flex direction="column" textAlign="center" align="center">
        <Heading
          mb={5}
          fontSize="5xl"
          fontWeight="extrabold"
        >
          Cryptseed
        </Heading>

        <Text
          mb={5}
          fontSize="2xl"
          fontWeight="semibold"
        >
          CryptSeed is a solution for all your seed phrases. Save seed phrases, inside your browser, encrypted.
        <br />
        Your precious seed phrase doesn't leave the browser.
        </Text>

        <div className={styles.btnGrp}>
          <Button type="submit" height="5vh"><Link href="/auth">Join Now</Link></Button>
          <Button type="submit" height="5vh"><Link href="/auth">Login</Link></Button>
        </div>
      </Flex>


    </div>
  )
}
