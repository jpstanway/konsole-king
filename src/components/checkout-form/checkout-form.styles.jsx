import styled from "styled-components";

export const CheckoutFormElement = styled.form`
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

export const CheckoutFormExtra = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem 2rem 0rem;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;
