import React, { useEffect, useState, ReactElement } from 'react';

const SearchBar = ({ setSearchTerm }): ReactElement => {
  const [search, setSearch] = useState<string>('');
  const [debounce, setDebounce] = useState<string>('');

  //sets search to equal debounce state after 400ms
  useEffect(() => {
    const timer = setTimeout(() => setSearch(debounce), 400);
    return () => clearTimeout(timer);
  }, [debounce]);

  // submit a new search after search state has been updated
  useEffect(() => {
    if (search !== '') {
      setSearchTerm(search);
    } else {
      setSearchTerm('');
    }
  }, [search, setSearchTerm]);

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search By Name"
        value={debounce}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setDebounce(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
