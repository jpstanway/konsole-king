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
        <option value="all-consoles">All consoles</option>
        <option value="home-consoles">Home</option>
        <option value="handheld-consoles">Handheld</option>
        <option value="cloud-consoles">Cloud</option>
        <option value="legacy-consoles">Legacy</option>
        <option value="vr-headsets">VR</option>
        <option value="accessories">Acessories</option>
        <option value="audio">Audio</option>
        <option value="used">Used</option>
      </SearchDropdown>
      <SearchButton type="submit">
        <i className="fas fa-search fa-2x"></i>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
