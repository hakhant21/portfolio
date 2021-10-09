import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import '../styles/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
