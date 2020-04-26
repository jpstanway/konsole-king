import React from "react";

import { SpinnerContainer, SpinnerImg } from "./with-spinner.styles";

const spinner =
  "https://res.cloudinary.com/mtninja/image/upload/v1587932960/konsole-king/spinner.gif";

const WithSpinner = (WrappedComponent) => {
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
