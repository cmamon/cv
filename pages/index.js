import Head from 'next/head'
import Link from 'next/link'

import Spinner from '../components/Spinner'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Christophe QUENETTE'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{name} - CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <img
            src="/images/photo-cv.jpg"
            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>
            Développeur Fullstack
          </p>
          <p>christophe.quenette@gmail.com &nbsp;&mdash;&nbsp; +33 7 50 86 74 89 &nbsp;&mdash;&nbsp; Montpellier, France &nbsp;&mdash;&nbsp; Permis B</p>
        </header>

        <hr className={styles.sep} />

        <p className={styles.section}>
          Compétences
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Technologies du Web</h3>
            <div className={styles.row}>
              <ul className={styles.column}>
                <li><b>Javascript</b></li>
                  <ul>
                    <li>JQuery</li>
                    <li>Angular (versions 7, 8)</li>
                    <li>React, Next.js</li>
                    <li>Vue.js</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                  </ul>
              </ul>
              <ul className={styles.column}>
                <li><b>PHP</b></li>
                <ul>
                    <li>POO PHP 7</li>
                    <li>Symfony (3, 4, 5)</li>
                    <li>Twig</li>
                  </ul>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Programmation système</h3>
            <p><b>Linux</b> : Programmation système en C / Python sous Linux</p>
            <p><b>Docker</b> : Création de conteneurs sous Windows (e.g. conteneur Redis)</p>
          </div>

          <div className={styles.card}>
            <h3>Langages objet</h3>
            <p><b>Java</b> : Réalisation d'une application Android avec back-end en Node.js</p>
            <p><b>C++</b> : Réalisation d'un jeu</p>
            <p><b>C#</b> : Mise en place de Services Web</p>
          </div>
        </div>
        
        <p className={styles.section}>
          Expériences professionnelles
        </p>

        <p className={styles.section}>
          Diplômes et Formation
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Master Informatique</h3>
            <div className={styles.card_subtitle}>
              <b>Université de Montpllier</b>
                &nbsp;
                <img src="/images/logo-um.png" width="30px"></img>
                &nbsp;&mdash;&nbsp; 
              <b>Septembre 2018 - Juillet 2020</b>
            </div>
            <p>Master informatique parcours Architecture et Ingénierie du logiciel et du Web</p>
            <p>Métamodélisation UML, Programmation mobile multiplateforme, Machine learning et Deep Learning, ...</p>
          </div>

          <div className={styles.card}>
            <h3>Licence Informatique</h3>
            <div className={styles.card_subtitle}>
              <b>Université de Montpllier</b>
                &nbsp;
                <img src="/images/logo-um.png" width="30px"></img>
                &nbsp;&mdash;&nbsp; 
              <b> Septembre 2015 - Juillet 2018</b>
            </div>
            <p>Licence informatique généraliste</p>
            <p>Algorithmes et strutures de données, Programmation Objet, Programmtion fonctionnelle, ...</p>
          </div>
        </div>

        <p className={styles.section}>
          Projets en cours de réalisation
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.card_title}>
              <h3>Nimble Hub</h3>
              <Spinner />
            </div>

            <p>
              <b>Client: </b> Application créée avec le framework React Next.js.
            </p> 
            <a href="https://github.com/cmamon/nimble-hub-client">
              https://github.com/cmamon/nimble-hub-client
            </a>
            <p>
              <b>Serveur: </b> Application Node.JS avec Socket.IO, Express et Redis  
            </p>
            <a href="https://github.com/cmamon/nimble-hub-server">
              https://github.com/cmamon/nimble-hub-server
            </a>

            <hr className={styles.sep} />

            <div className={styles.card_title}>
              <h3>Indigenous Caribbean Map</h3>
              <Spinner />
            </div>
            <p>
              <a href="https://github.com/cmamon/indigenous-caribbean">
                https://github.com/cmamon/indigenous-caribbean
              </a>
            </p>

            <hr className={styles.sep} />

            <div className={styles.card_title}>
              <h3>Ce CV</h3>
              <Spinner />
            </div>

            <p>
              <a href="https://github.com/cmamon/cv">
                https://github.com/cmamon/cv
              </a>
            </p>
          </div>
        </div>

        <p className={styles.section}>
          Langues
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.card_subtitle}>
              <b>Anglais :</b>
              &nbsp;&nbsp; 
              <img src="/images/plus.svg" width="20px"></img>&nbsp;
              <img src="/images/plus.svg" width="20px"></img>&nbsp;
              <img src="/images/plus.svg" width="20px"></img>&nbsp;&nbsp;&mdash;&nbsp; 
              <p>Conversationnel</p>
            </div>
            <div className={styles.card_subtitle}>
              <b>Espagnol :</b>
              &nbsp;&nbsp; 
              <img src="/images/plus.svg" width="20px"></img>&nbsp;
              <img src="/images/plus.svg" width="20px"></img>&nbsp;&nbsp;&mdash;&nbsp; 
              <p>Niveau scolaire</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <a href="https://github.com/cmamon">
            <img id="github-logo" src="/images/github-mark-64px.png"></img>
            {'  '}https://github.com/cmamon
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/christophe-quenette">
            <img id="linkedin-logo" src="/images/linkedin-logo.png"></img>
            {'  '}@christophe-quenette
          </a> 
        </p>
      </footer>
    </div>
  )
}
