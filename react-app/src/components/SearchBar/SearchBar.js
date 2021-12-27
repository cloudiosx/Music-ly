import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form action="/" method="get" className="search_form">
      <input
        type="text"
        id="header-search"
        className="search_input"
        placeholder="Search accounts and videos"
        name="search"
      />
      <span className="search_divider"></span>
      <button type="submit" className="search_button">
        <img src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/magnify.svg" alt="click here to search" />
      </button>
    </form>
  );
};

export default SearchBar;
