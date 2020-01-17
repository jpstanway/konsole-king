import styled, { css } from "styled-components";

const setActiveTab = props => {
  if (props.activeTab) {
    return activeTabStyles;
  }

  return defaultTabStyles;
};

const setActiveInfo = props => {
  if (props.activeInfo) {
    return activeInfoStyles;
  }

  return defaultInfoStyles;
};

export const TabGroup = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style-type: none;
`;

export const Tab = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const defaultTabStyles = css`
  background-color: var(--color-grey-light);
  color: var(--color-grey-dark);
  font-size: 1.7rem;
  padding: 1.5rem 3rem;

  &:hover {
    background-color: #c7c8be;
  }
`;

const activeTabStyles = css`
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.9rem;
  font-weight: 700;
  padding: 1.75rem 3.5rem;
`;

export const TabButton = styled.button`
  border: 0;
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }

  ${setActiveTab}
`;

const defaultInfoStyles = css`
  display: none;
`;

const activeInfoStyles = css`
  display: block;
`;

export const TabInfo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 30rem;
  padding: 3rem;

  ${setActiveInfo}
`;

export const TabInfoParagraph = styled.p`
  color: var(--color-grey-dark);
  margin-bottom: 2rem;
`;

export const TabInfoTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TabInfoTableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const TabInfoTableData = styled.td`
  color: var(--color-grey-dark);
  padding: 1rem 0rem;

  &:not(:last-child) {
    font-weight: 700;
    width: 15%;
  }
`;

export const TabInfoReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;

  input {
    margin-bottom: 1rem;
  }

  button {
    align-self: flex-end;
  }
`;
