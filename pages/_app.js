import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../firebase';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
