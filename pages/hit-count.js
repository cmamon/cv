import dynamic from 'next/dynamic';
import Head from 'next/head';

const Counter = dynamic(() => import ('../components/Counter.jsx'));
const name = 'Christophe QUENETTE';

function HitCount() {
  return (
    <>
      <Head>
        <title>Hit Counter - CV {name}</title>
        <meta property="og:title" content={`Hit Counter - CV ${name}`} key="title"/>
        <meta property="og:viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      </Head>
      <Counter />
    </>
  );
}

export default HitCount
