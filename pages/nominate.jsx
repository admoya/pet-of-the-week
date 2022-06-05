import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/page.module.css';

export default function Nominate() {
  const [previewSrc, setPreviewSrc] = useState('');
  const onFileChange = (e) => {
    if (e.target.files.length) { setPreviewSrc(URL.createObjectURL(e.target.files[0])); }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name, pros, cons, picture,
    } = e.target;
    console.log(picture.files);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Pet of the Week</title>
        <meta name="description" content="See who's the pet of the week!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Nominate a Pet
        </h1>
        <form onSubmit={onSubmit} className="pure-form pure-form-stacked" style={{ paddingTop: '1rem' }}>
          <label>
            Name
            <input id="name" type="text" autofill="off" />
          </label>
          <label style={{ paddingTop: '1rem' }}>
            Pros
            <textarea id="pros" />
          </label>
          <label>
            Cons
            <textarea id="cons" />
          </label>
          <label style={{ paddingTop: '1rem' }}>
            Picture
            <input onChange={onFileChange} id="picture" type="file" accept="image/*" />
          </label>
          { previewSrc && (
          <div>
            <Image
              src={previewSrc}
              alt="Preview of the nominee"
              width={200}
              height={200}
              objectFit="cover"
            />
          </div>
          )}
        </form>
      </main>
    </div>
  );
}
