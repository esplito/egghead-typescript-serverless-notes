import React, { useState } from 'react';
import styles from './Form.module.css';

export function Form() {
  const [name, setName] = useState('');
  const [favouriteColour, setFavouriteColour] = useState('');
  const [response, setResponse] = useState();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === '' && favouriteColour === '') {
      return;
    }
    const res = await fetch('/.netlify/functions/submit', {
      method: 'POST',
      body: JSON.stringify({ name, favouriteColour }),
    }).then((res) => res.json());

    setResponse(res);
    setName('');
    setFavouriteColour('');
  }

  return (
    <>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      {/* Using CSS modules */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='name' className={styles.label}>
          Name
        </label>
        <input
          name='name'
          id='name'
          className={styles.input}
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor='favouriteColour' className={styles.label}>
          Favourite Colour
        </label>
        <input
          name='favouriteColour'
          id='favouriteColour'
          className={styles.input}
          type='text'
          onChange={(e) => setFavouriteColour(e.target.value)}
          value={favouriteColour}
        />
        <button className={styles.button}>Submit</button>
      </form>
    </>
  );
}
