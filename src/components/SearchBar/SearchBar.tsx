import React, { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import styles from './SearchBar.module.css';


interface SearchBarProps {
  onSearch: (searchValue: string) => void; 
}

const notify = () =>
  toast.error('Write a word to search for', {
    duration: 3000,
    position: 'top-right',
  });

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement;

    if (!input.value.trim()) {
      notify();
      return;
    }

    const searchValue = input.value;
    onSearch(searchValue);
    form.reset();
  };

  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchForm} onSubmit={onSubmitHandler}>
        <input
          className={styles.searchInput}
          type='text'
          name='search'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button className={styles.searchBtn} type='submit'>
          🔍
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
