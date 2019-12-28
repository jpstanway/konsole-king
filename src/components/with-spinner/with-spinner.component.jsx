import React from "react";

import spinner from "../../assets/spinner.gif";

import { SpinnerContainer, SpinnerImg } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerImg src={spinner} alt="loading..." />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
