import Head from 'next/head'
import About from '../Components/About'
import Home from '../Components/Home'

export default function LandingPage() {
  return (
    <div className="" >{/* bg-no-repeat w-fullstyle={{backgroundImage:`url('/assets/images/middle_body/middle_bg.png')`}} */}
      <Head>
        <title>Eftekar Raghib Portfolio 2021</title>
        {/* <link rel="https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css"></link> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
      </Head>
      <Home />
      <About/>

    </div>
  )
}
