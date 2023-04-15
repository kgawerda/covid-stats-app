import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by Country"
      className="searchBar"
      value={query}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
