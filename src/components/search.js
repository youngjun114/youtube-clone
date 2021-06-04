/* eslint-disable */
import React, { useState } from 'react';
import styles from './search.module.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const Search = ({ onSubmit }) => {
  const [searchResult, setSearchResult] = useState('');
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = inputRef.current.value;
    console.log(result);
    // result && onSubmit(result);
    formRef.current.reset();
  };

  return (
    <>
      <form
        ref={formRef}
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          ref={inputRef}
          type='text'
          placeholder='Search'
        />
        <div className={styles.buttonContainer}>
          <SearchIcon className={styles.searchButton} />
          <MicIcon className={styles.micIcon} />
        </div>
      </form>
    </>
  );
};

export default Search;
