import styled from "styled-components";

export const AuthFormContainer = styled.div`
  height: 100%;

  h2 {
    border-bottom: 1px solid var(--color-grey);
    color: var(--color-grey-dark);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-grey);
    margin-bottom: 2rem;
  }

  button {
    width: 100%;
  }
`;

export const Form = styled.form`
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

export const Error = styled.p`
  color: var(--color-secondary) !important;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
