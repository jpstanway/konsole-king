import React from "react";

import {
  FooterContainer,
  FooterInnerContainer,
  SocialMenu,
  SocialIcon,
  FooterInputContainer,
  FooterInput,
  FooterBtn,
  FooterInfo,
  FooterLinks,
  FooterLink,
  FooterMenu
} from "./footer.styles";

import Logo from "../logo/logo.component";

const Footer = () => (
  <FooterContainer>
    <FooterInnerContainer>
      <FooterInputContainer>
        <FooterInput placeholder="Subscribe to our newsletter" />
        <FooterBtn>Subscribe</FooterBtn>
      </FooterInputContainer>
      <FooterInfo>
        <Logo footer />
        <SocialMenu>
          <li>
            <SocialIcon to="/">
              <i className="fab fa-facebook-square fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon to="/">
              <i className="fab fa-twitter-square fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon to="/">
              <i className="fab fa-pinterest-square fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon to="/">
              <i className="fab fa-linkedin fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon to="/">
              <i className="fab fa-youtube-square fa-2x"></i>
            </SocialIcon>
          </li>
        </SocialMenu>
      </FooterInfo>
      <FooterLinks>
        <FooterMenu>
          <thead>
            <tr>
              <th>Find It Fast</th>
              <th>Information</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <FooterLink to="/browse/consoles?allConsoles=true">
                  Consoles
                </FooterLink>
              </td>
              <td>
                <FooterLink to="/">Find A Store</FooterLink>
              </td>
              <td>
                <FooterLink to="/user">My Account</FooterLink>
              </td>
            </tr>
            <tr>
              <td>
                <FooterLink to="/browse/vr">VR</FooterLink>
              </td>
              <td>
                <FooterLink to="/">About Us</FooterLink>
              </td>
              <td>
                <FooterLink to="/user/orders">Order History</FooterLink>
              </td>
            </tr>
            <tr>
              <td>
                <FooterLink to="/browse/accessories">Accessories</FooterLink>
              </td>
              <td>
                <FooterLink to="/">Contact Us</FooterLink>
              </td>
              <td>
                <FooterLink to="/user/wishlist">Wish List</FooterLink>
              </td>
            </tr>
            <tr>
              <td>
                <FooterLink to="/browse/audio">Audio</FooterLink>
              </td>
              <td>
                <FooterLink to="/">Careers</FooterLink>
              </td>
              <td>
                <FooterLink to="/">Customer Service</FooterLink>
              </td>
            </tr>
            <tr>
              <td>
                <FooterLink to="/browse/used">Used</FooterLink>
              </td>
              <td>
                <FooterLink to="/">Gift Cards</FooterLink>
              </td>
              <td>
                <FooterLink to="/">Returns / Exchange</FooterLink>
              </td>
            </tr>
          </tbody>
        </FooterMenu>
      </FooterLinks>
    </FooterInnerContainer>
  </FooterContainer>
);

export default Footer;
