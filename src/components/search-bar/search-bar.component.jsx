import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import {
  SearchContainer,
  SearchInput,
  SearchDropdown,
  SearchButton
} from "./search-bar.styles";

import customLinks from "../../scripts/custom-links.js";

const SearchBar = ({ history }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchFilter, setSearchFilter] = useState("all");

  const handleSubmit = e => {
    e.preventDefault();

    const link = customLinks[searchFilter]
      ? `/browse/${customLinks[searchFilter]}`
      : "/browse";

    // search inventory for keyword
    history.push(link, { searchValue });
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
        name="searchValue"
        placeholder="Search for item"
      />
      <SearchDropdown
        onChange={e => setSearchFilter(e.target.value)}
        value={searchFilter}
        name="searchFilter"
      >
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

export default withRouter(SearchBar);
