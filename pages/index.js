import Head from 'next/head'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className="pb-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Header/>
      </main>
    </div>
  )
}
