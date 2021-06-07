/* eslint-disable */
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './search.css';

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
      <form ref={formRef} className='formContainer' onSubmit={handleSubmit}>
        <input
          className='input'
          ref={inputRef}
          type='text'
          placeholder='Search'
        />
        <div className='buttonContainer'>
          <SearchIcon className='searchButton' />
          <MicIcon className='micIcon' />
        </div>
      </form>
    </>
  );
};

export default Search;
