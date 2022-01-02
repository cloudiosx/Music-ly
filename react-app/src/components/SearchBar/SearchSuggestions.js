import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '@mui/icons-material/Search';
import UserHeader from '../UserHeader/UserHeader';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

const SearchSuggestions = ({ searchTerm, clearSearch, searchedUsers, searchedPosts }) => {
  const history = useHistory();

  const handleClickSearchPost = (postId) => {
    history.push(`/posts/${postId}`);
    clearSearch();
  };

  if (!searchTerm) return null;
  return (
    <div className="search_suggestion">
      {searchedPosts.map((item) => (
        <div key={item.id} className="search_suggestion_posts--item" onClick={() => handleClickSearchPost(item.id)}>
          <div className="search_icon">
            <SearchIcon fontSize="small" />
          </div>
          <div className="search_content">
            <h4>{item.caption}</h4>
          </div>
        </div>
      ))}
      <div className="search_account_label">Accounts</div>
      {searchedUsers.map((userData) => (
        <UserHeader key={userData.id} userData={userData} />
      ))}
    </div>
  );
};

SearchSuggestions.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  searchedUsers: PropTypes.array,
  searchedPosts: PropTypes.array,
};
SearchSuggestions.defaultProps = {
  searchTerm: '',
};

export default SearchSuggestions;
