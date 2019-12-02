import React from "react";

import {
  SearchContainer,
  SearchInput,
  SearchDropdown,
  SearchButton
} from "./search-bar.styles";

const SearchBar = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Searching for item...");
  };

  return (
    <SearchContainer onClick={handleSubmit}>
      <SearchInput placeholder="Search for item" />
      <SearchDropdown>
        <option value="">All categories</option>
        <option value="consoles">Consoles</option>
        <option value="games">Games</option>
        <option value="audio">Audio</option>
      </SearchDropdown>
      <SearchButton type="submit">
        <i className="fas fa-search fa-2x"></i>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
