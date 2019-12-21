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
    margin-bottom: 5rem;
  }
`;

export const Form = styled.form`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

export const AuthFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthFormInput = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 4px;
  background-color: var(--color-grey-light);
  border: 0;
  padding-left: 1rem;
  font-size: 1.8rem;
`;

export const AuthFormInputExtra = styled.div`
  display: flex;
  justify-content: space-between;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;
