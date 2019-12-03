import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 100%;
  border: 3px solid var(--color-grey-light);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 35rem 1fr 5rem;
  margin-top: 5px;
`;

export const SearchInput = styled.input`
  border: 0;
  font-size: 1.6rem;
  padding-left: 1rem;
`;

export const SearchDropdown = styled.select`
  padding-left: 1rem;
  border: 0;
  border-left: 1px solid var(--color-grey-light);
  cursor: pointer;
  font-size: 1.6rem;
`;

export const SearchButton = styled.button`
  background-color: var(--color-primary);
  border: 0;
  border-radius: 0px 4px 4px 0px;
  color: var(--color-white);
  cursor: pointer;
  height: 100%;
  padding: 1rem;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;
