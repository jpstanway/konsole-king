import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 4px;
  background-color: var(--color-grey-light);
  border: 0;
  padding-left: 1rem;
  font-size: 1.8rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  border-radius: 4px;
  background-color: var(--color-grey-light);
  border: 0;
  padding: 1rem;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: var(--color-grey-dark);
  font-weight: 700;
  margin-bottom: 5px;
`;
