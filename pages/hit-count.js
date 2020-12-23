import Head from 'next/head'

import Counter from '../components/Counter.jsx'

const name = 'Christophe QUENETTE';

function HitCount() {
  return (
    <>
      <Head>
        <title>Hit Counter - CV {name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Hit Counter - CV ${name}`} key="title"/>
        <meta property="og:description" content="Curriculum Vitae de Christophe QUENETTE" key="description" />
        <meta property="og:author" content="Christophe QUENETTE" key="author" />
        <meta property="og:image" content="https://cv.cmamon.vercel.app/images/profile-image.jpg" />
        <meta property="og:url" content="https://cv.cmamon.vercel.app/hit-counter" key="url" />
        <meta property="og:viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      </Head>
      <Counter />
    </>
  );
}

export default HitCount
