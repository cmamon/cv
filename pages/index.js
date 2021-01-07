import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const CV = dynamic(() => import ('../components/CV.jsx'));

const name = 'Christophe QUENETTE';

export default function Index() {
  useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    fetch('/api/increment-hit-count')
      .then((res) => res.json());
  });

  return (
    <div className="container">
      <Head>
        <meta name="title" content={`${name} - CV`} key="title"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        
        <title>{name} - CV</title>
        <meta property="og:type" content="website" />
      </Head>
      <CV />
    </div>
  );
}
