import Head from 'next/head'
import Middle from '../Components/Home/Middle'
import Container from '../Components/Primary/Container'
import classes from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className="" >{/* bg-no-repeat w-fullstyle={{backgroundImage:`url('/assets/images/middle_body/middle_bg.png')`}} */}
      <Head>
        <title>Eftekar Raghib Portfolio 2021</title>
        {/* <link rel="https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css"></link> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.home_bg}`}>
        <Container>
            <Middle/>
        </Container>
      </main>
    </div>
  )
}
