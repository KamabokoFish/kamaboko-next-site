import '@/styles/reset.css';
import '@/styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // multiple three.js scripts imported Warning ,so commented out
  // useEffect(() => {
  //   const threeScript = document.createElement('script');
  //   threeScript.setAttribute('id', 'threeScript');
  //   threeScript.setAttribute(
  //     'src',
  //     'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
  //   );
  //   document.getElementsByTagName('head')[0].appendChild(threeScript);
  //   return () => {
  //     if (threeScript) {
  //       threeScript.remove();
  //     }
  //   };
  // }, []);
  return <Component {...pageProps} />;
}
