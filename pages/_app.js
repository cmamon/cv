import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Register a service worker to enable PWA
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', () => {
  //       navigator.serviceWorker.register('/service-worker.js')
  //       .then((registration) => {
  //         console.log('Service Worker registration successful with scope: ', registration.scope);
  //       })
  //       .catch((err) => {
  //         console.log('Service Worker registration failed: ', err);
  //       });
  //     });
  //   }
  // });

  return <Component {...pageProps} />
}

export default MyApp
