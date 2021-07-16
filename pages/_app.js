import 'tailwindcss/tailwind.css'
import Menu from '../Components/Primary/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative overflow-hidden">
      <Component {...pageProps} />
      <Menu/>
    </div>
  )
}

export default MyApp
