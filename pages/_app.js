import 'tailwindcss/tailwind.css'
import Menu from '../Components/Primary/Menu'
import '../styles/globals.css'
import Header from '../Components/Header/index';
import Footer from '../Components/Primary/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Component {...pageProps} />
      <Menu />
      <Footer/>
    </div>
  )
}

export default MyApp
