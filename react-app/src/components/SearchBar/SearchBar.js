const SearchBar = () => (
  <form action="/" method="get">
      <input
          type="text"
          id="header-search"
          placeholder="Search accounts and videos"
          name="s"
      />
      <button type="submit">Search</button>
  </form>
);

export default SearchBar;
