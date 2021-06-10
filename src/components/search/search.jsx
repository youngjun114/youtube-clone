/* eslint-disable */
import React, { memo, useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import styles from './search.module.css';
import History from '../history/history';

const Search = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
    History.push('/search?q=' + value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.input_container}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Search'
        onKeyPress={onKeyPress}
      />
      <button type='submit' className={styles.search_button} onClick={onClick}>
        <SearchIcon className={styles.search_icon} />
      </button>
      <MicIcon className={styles.voice_icon} />
    </div>
  );
});

export default Search;
