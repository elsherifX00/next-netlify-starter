import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Takeover By CyberAr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Takeover By CyberAr" />
        <p className="description">
           <code>This page is takeover by CyberAr</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
