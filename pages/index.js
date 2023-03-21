import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from './Homepage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>
         Venkata Bala Vamsi
        </title>
        <link rel="shortcut icon" type="image/jpeg" href="/Vamsi_s.jpeg" />
      </Head>
      <Homepage/>
    </>
  )
}
