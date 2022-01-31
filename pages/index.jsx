import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const desiredIntroduction = 'This week\'s pet of the week is...';

const petOfTheWeek = 'Tommy';

export default function Home() {
  const [introduction, setIntroduction] = useState('');
  const [potw, setPotw] = useState('');

  useEffect(
    () => {
      let timeout;
      if (introduction.length !== desiredIntroduction.length) {
        timeout = setTimeout(() => {
          setIntroduction(desiredIntroduction.substring(0, introduction.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setPotw(petOfTheWeek);
        }, 2000);
      }
      return () => clearTimeout(timeout);
    },
    [introduction, setIntroduction, setPotw],
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Pet of the Week</title>
        <meta name="description" content="See who's the pet of the week!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pet of the Week!
        </h1>

        <p className={styles.description}>
          {`${introduction} ${potw}${potw && '!!!'}`}
        </p>

        <div className={styles.pictureFrame}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/pet-of-the-week.appspot.com/o/tommy.jpg?alt=media&token=aeb9b495-ad0d-49ce-9dfe-cdb28d9ba8cf"
            alt="Picture of Tommy, the Pet of the Week!"
            priority
            layout="fill"
            objectFit="cover"
            class={!potw ? styles.pictureHidden : ''}
          />
        </div>
      </main>
    </div>
  );
}
