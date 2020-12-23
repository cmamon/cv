import { useState, useEffect } from 'react';

import styles from '../styles/Counter.module.css'

function Counter() {
  const [hits, setHits] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/get-hit-count')
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === 'number') {
          setHits(json.hits);
          setIsLoading(false);
        }
      });
  });

  const hitsUndefined = (typeof hits === 'undefined');
  
  return (
    <div className={styles.box}>
      <h1>{isLoading ? 'Chargement ...' : 'Hit Counter'}</h1>
      {!isLoading &&
        <div className={styles.counter}>
          {hitsUndefined ? 'Le nombre de visites n\'a pas pu être récupéré' : `${hits} visites au total.`}
        </div>
      }
    </div>
  );
}

export default Counter
