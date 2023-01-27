import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/page.module.css';

export default function Nominate() {
  const [previewSrc, setPreviewSrc] = useState('');
  const [name, setName] = useState('');
  const [pros, setPros] = useState(['']);
  const [cons, setCons] = useState(['']);

  const onFileChange = (e) => {
    if (e.target.files.length) { setPreviewSrc(URL.createObjectURL(e.target.files[0])); }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      picture,
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
            <input id="pet-name" type="text" autoComplete="pet-name" value={name} onChange={({ target: { value } }) => setName(value)} />
          </label>
          <fieldset>
            <legend>Pros:</legend>
            {pros.map((pro, index) => (
              <input
                key={pro}
                autoFocus
                type="text"
                autoComplete="off"
                value={pro}
                onChange={({ target: { value } }) => setPros(
                  [...pros.slice(0, index), value, ...pros.slice(index + 1, pros.length)],
                )}
                onKeyDown={({ key }) => {
                  if (key === 'Enter') {
                    setPros([...pros, '']);
                  } else if (key === 'Backspace' && pro === '' && pros.length > 1) {
                    setPros(pros.slice(0, pros.length - 1));
                  }
                }}
              />
            ))}
            <span>
              <button type="button" onClick={() => setPros([...pros, ''])}>Add</button>
              <button type="button" disabled={pros.length === 1} onClick={() => setPros(pros.slice(0, pros.length - 1))}>Remove</button>
            </span>
          </fieldset>
          <fieldset>
            <legend>Cons:</legend>
            {cons.map((con, index) => (
              <input
                key={con}
                autoFocus
                type="text"
                autoComplete="off"
                value={con}
                onChange={({ target: { value } }) => setCons(
                  [...cons.slice(0, index), value, ...cons.slice(index + 1, cons.length)],
                )}
                onKeyDown={({ key }) => {
                  if (key === 'Enter') {
                    setCons([...cons, '']);
                  } else if (key === 'Backspace' && con === '' && cons.length > 1) {
                    setCons(cons.slice(0, cons.length - 1));
                  }
                }}
              />
            ))}
            <span>
              <button type="button" onClick={() => setCons([...cons, ''])}>Add</button>
              <button type="button" disabled={cons.length === 1} onClick={() => setCons(cons.slice(0, cons.length - 1))}>Remove</button>
            </span>
          </fieldset>
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
          <button type="submit">Submit Nomination</button>
        </form>
      </main>
    </div>
  );
}
