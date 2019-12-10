import React from "react";

import {
  FooterContainer,
  FooterInnerContainer,
  SocialMenu,
  SocialIcon,
  FooterSignUp,
  FooterInputContainer,
  FooterInput,
  FooterBtn,
  FooterInfo,
  FooterLinks,
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
        <Logo />
        <SocialMenu>
          <li>
            <SocialIcon href="#">
              <i className="fab fa-facebook-square fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#">
              <i className="fab fa-twitter-square fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#">
              <i className="fab fa-pinterest-square fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#">
              <i className="fab fa-linkedin fa-2x"></i>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#">
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
                <a href="#">Consoles</a>
              </td>
              <td>
                <a href="#">Find A Store</a>
              </td>
              <td>
                <a href="#">My Account</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Games</a>
              </td>
              <td>
                <a href="#">About Us</a>
              </td>
              <td>
                <a href="#">Order Tracking</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Accessories</a>
              </td>
              <td>
                <a href="#">Contact Us</a>
              </td>
              <td>
                <a href="#">Wish List</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Laptops</a>
              </td>
              <td>
                <a href="#">Careers</a>
              </td>
              <td>
                <a href="#">Customer Service</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">TVs / Monitors</a>
              </td>
              <td>
                <a href="#">Gift Cards</a>
              </td>
              <td>
                <a href="#">Returns / Exchange</a>
              </td>
            </tr>
          </tbody>
        </FooterMenu>
      </FooterLinks>
    </FooterInnerContainer>
  </FooterContainer>
);

export default Footer;
