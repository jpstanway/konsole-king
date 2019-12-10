import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 11rem;
`;

export const LogoImg = styled(Link)`
  color: var(--color-black);
  text-transform: uppercase;
`;
