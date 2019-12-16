export const size = {
  mobileS: "20em",
  mobileM: "23.4em",
  mobileL: "26.6em",
  tablet: "48em",
  laptop: "64em",
  laptopM: "75em",
  laptopL: "90em",
  desktop: "160em"
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};
