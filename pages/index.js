import Head from 'next/head'
import React from 'react';

import CV from '../components/CV.jsx'
import styles from '../styles/Home.module.css'

const name = 'Christophe QUENETTE';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hits: undefined };
  }

  componentDidMount() {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    fetch('/api/increment-hit-count')
      .then((res) => res.json());
  }

  render () {
    return (
      <div className={styles.container}>
        <Head>
          <title>{name} - CV</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={name +  ' - CV'} key="title"/>
          <meta property="og:description" content="Curriculum Vitae de Christophe QUENETTE" key="description" />
          <meta property="og:author" content="Christophe QUENETTE" key="author" />
          <meta property="og:image" content="https://cv.cmamon.vercel.app/images/profile-image.jpg" />
          <meta property="og:url" content="https://cv.cmamon.vercel.app/" key="url" />
          <meta property="og:viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        </Head>
        <CV />
      </div>
    );
  }
}
