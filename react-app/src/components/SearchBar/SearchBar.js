import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchSuggestions from './SearchSuggestions';
import './SearchBar.css';

const SearchBar = () => {
  const allUsers = useSelector((state) => state.userStore.allUsers);
  const allPosts = useSelector((state) => state.postStore.allPosts);

  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState('');

  const searchedUsers = useMemo(() => {
    if (searchTerm) {
      return allUsers
        .filter(
          (item) =>
            item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.fullname.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .splice(0, 5);
    }
    return allUsers;
  }, [searchTerm, allUsers]);

  const searchedPosts = useMemo(() => {
    if (searchTerm) {
      return allPosts
        .filter(
          (item) =>
            item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.music.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .splice(0, 8);
    }
    return allPosts;
  }, [searchTerm, allPosts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/posts/${searchedPosts.id}`);
  };

  const clearSearch = useCallback(() => setSearchTerm(''), []);

  return (
    <div style={{ position: 'relative' }}>
      <form className="search_form" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          id="header-search"
          className="search_input"
          placeholder="Search accounts and videos"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="search_divider"></span>
        <button type="submit" className="search_button">
          <img
            src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/magnify.svg"
            alt="click here to search"
          />
        </button>
      </form>
      <SearchSuggestions
        searchedUsers={searchedUsers}
        searchTerm={searchTerm}
        clearSearch={clearSearch}
        searchedPosts={searchedPosts}
      />
    </div>
  );
};

export default SearchBar;
