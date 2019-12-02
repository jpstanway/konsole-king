import styled from "styled-components";

export const SearchContainer = styled.form`
  height: 3.5rem;
  width: 100%;
  border: 1px solid var(--color-grey-light);
`;

export const SearchInput = styled.input`
  height: 100%;
  border: 0;
  padding-left: 1rem;
`;

export const SearchDropdown = styled.select`
  height: 100%;
  padding-left: 1rem;
  border: 0;
  border-left: 1px solid var(--color-grey-light);
`;

export const SearchButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  color: var(--color-white);
  cursor: pointer;
  padding: 1rem 1.5rem;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;
