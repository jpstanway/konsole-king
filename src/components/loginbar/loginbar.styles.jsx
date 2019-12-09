import styled from "styled-components";
import { device } from "../../scripts/media";

export const LoginbarContainer = styled.div`
  background-color: var(--color-grey-light);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`;

export const LoginMenu = styled.div`
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: auto;
  max-width: var(--breakpoint-xl);
  position: relative;
`;

export const LoginItems = styled.ul`
  list-style-type: none;

  @media ${device.tablet} {
    display: none;
    position: absolute;
    top: -10rem;
    left: 0;
    width: 100%;
  }
`;

export const LoginItem = styled.li`
  display: inline-block;

  &:not(:first-child) {
    border-left: 1px solid black;
    margin-left: 1rem;
    padding-left: 1rem;

    @media ${device.tablet} {
      border-left: 0;
      margin: 0;
      padding: 0 0 0 2rem;
    }
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    height: 4rem;
    background-color: var(--color-grey-light);
    border-top: 1px solid var(--color-white);
    padding-left: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    a {
      color: var(--color-grey-dark);
    }

    &:hover,
    &:active {
      background-color: var(--color-grey);
    }

    &:hover > a,
    &:active > a {
      color: var(--color-white);
    }
  }
`;

export const MobileLoginMenu = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;

  &:hover > span,
  &:hover > span::before,
  &:hover > span::after {
    background-color: var(--color-grey);
  }
`;

export const MobileLoginButton = styled.span`
  position: relative;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 4px;
    border-radius: 4px;
    background-color: var(--color-grey-dark);
    display: none;
    transition: all 0.2s;

    @media ${device.tablet} {
      display: block;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
  }
`;
