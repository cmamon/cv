import Head from 'next/head'

import Spinner from '../components/Spinner'
import styles from '../styles/Home.module.css'

const name = 'Christophe QUENETTE'

export default function Home() {
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

      <main className={styles.main}>
        <header className={styles.header}>
          <img
            src="/images/profile-image.jpg"
            className={`${styles.headerImage} ${styles.borderCircle}`}
            alt={name}
          />
          
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>
            Développeur Fullstack
          </p>
          <p className={styles.personal_infos}><span>christophe.quenette@gmail.com</span> &nbsp;&nbsp; <span>+33 7 50 86 74 89</span> &nbsp;&nbsp; <span>Montpellier, France</span> &nbsp;&nbsp; <span>Permis B</span></p>
        </header>

        <hr className={styles.sep} />

        <p className={styles.section}>
          Compétences
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Technologies du Web</h3>
            <div className={styles.row}>
              <div className={styles.column}>
                <b>Javascript</b>
                <ul>
                  <li>JQuery</li>
                  <li>Angular (versions 7, 8)</li>
                  <li>React, Next.js</li>
                  <li>Vue.js</li>
                  <li>Node.js, Express.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className={styles.column}>
                <b>PHP</b>
                <ul>
                  <li>POO PHP 7</li>
                  <li>Symfony (3, 4, 5)</li>
                  <li>Twig</li>
                </ul>
                <b>Bases de données</b>
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
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


        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Développeur Fullstack</h3>
            <div className={styles.card_subtitle}>
              <b>Acelys Services Numériques, Montpellier, France</b>
                &nbsp;&mdash;&nbsp; 
              <b>Février 2020 - Juillet 2020</b>
            </div>
            <ul>
              <li>Stage de fin d'études de 6 mois</li>
              <li>
                Développement d'une application de production de rapports sur l'Intégration Continue
                avec l'application Web Gitlab.com, visant à garantir les bonnes pratiques de
                développement.
              </li>
              <li>Technologies : Symfony 5, Vue.js, MySQL, Vagrant, Docker, Bash</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Développeur Web PHP</h3>
            <div className={styles.card_subtitle}>
              <b>BBG Digital, Montpellier, France</b>
                &nbsp;&mdash;&nbsp; 
              <b>Juillet 2018 - Septembre 2018</b>
            </div>
            <ul>
              <li>Stage de 3 mois</li>
              <li>
                Développement d'une partie du coté back end d'une application Web en utilisant PHP avec Symfony 3 pour l'exploitation de fichiers XML fournis par des Web Services REST ou SOAP.
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.section}>
          Diplômes et Formation
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Master Informatique</h3>
            <div className={styles.card_subtitle}>
              <b>Université de Montpllier</b>
              &nbsp;
              <img className={styles.logo_um} src="/images/logo-um.png" width="30px"></img>
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
              <img className={styles.logo_um} src="/images/logo-um.png" width="30px"></img>
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
            <p className={styles.alignMiddle}>
              <img src="/images/github-icon.svg" width="20px" />
              <a className={styles.githubLink} data-content="https://github.com/cmamon/nimble-hub-client" href="https://github.com/cmamon/nimble-hub-client">
                https://github.com/cmamon/nimble-hub-client
              </a>
            </p>
            <div className={styles.clear} />
            <div className={styles.clear} />
            <div className={styles.clear} />
            <p>
              <b>Serveur: </b> Application Node.JS avec Socket.IO, Express et Redis  
            </p>
            <p className={styles.alignMiddle}>
              <img src="/images/github-icon.svg" width="20px" / >
              <a className={styles.githubLink} data-content="https://github.com/cmamon/nimble-hub-server" href="https://github.com/cmamon/nimble-hub-server">
                https://github.com/cmamon/nimble-hub-server
              </a>
            </p>

            <hr className={styles.sep} />

            <div className={styles.card_title}>
              <h3>Indigenous Caribbean Map</h3>
              <Spinner />
            </div>
            <p>
              Carte de la Caraïbe montrant les noms indigènes des différents pays/régions.
            </p>
            <p> Utilisation de l'API Mapbox pour la carte.</p>
            <p className={styles.alignMiddle}>
              <img src="/images/github-icon.svg" width="20px" />
              <a className={styles.githubLink} data-content="https://github.com/cmamon/indigenous-caribbean" href="https://github.com/cmamon/indigenous-caribbean">
                https://github.com/cmamon/indigenous-caribbean
              </a>
            </p>

            <hr className={styles.sep} />

            <div className={styles.card_title}>
              <h3>Ce CV</h3>
              <Spinner />
            </div>

            <p>
              SPA avec SSR developpée avec Next.js et déployéé sur Vercel   
            </p>
            <p className={styles.alignMiddle}>
              <img src="/images/github-icon.svg" width="20px" />
              <a className={styles.githubLink} data-content="https://github.com/cmamon/cv" href="https://github.com/cmamon/cv">
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
              <img src="/images/plus.svg" width="19px"></img>&nbsp;
              <img src="/images/plus.svg" width="19px"></img>&nbsp;
              <img src="/images/plus.svg" width="19px"></img>&nbsp;&nbsp;&mdash;&nbsp; 
              <p>Conversationnel</p>
            </div>
            <div className={styles.card_subtitle}>
              <b>Espagnol :</b>
              &nbsp;&nbsp; 
              <img src="/images/plus.svg" width="19px"></img>&nbsp;
              <img src="/images/plus.svg" width="19px"></img>&nbsp;&nbsp;&mdash;&nbsp; 
              <p>Niveau scolaire</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.alignMiddle}>  
          <img id="github-logo" src="/images/github-icon.svg"></img>
          <a href="https://github.com/cmamon">
            https://github.com/cmamon
          </a>
        </p>
        <p className={styles.alignMiddle}>
          <img id="linkedin-logo" src="/images/linkedin-icon.svg"></img>
          <a href="https://www.linkedin.com/in/christophe-quenette">
            @christophe-quenette
          </a>
        </p>   
      </footer>
    </div>
  )
}
