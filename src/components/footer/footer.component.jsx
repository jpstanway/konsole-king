import React from "react";

import {
  FooterContainer,
  FooterInnerContainer,
  SocialMenu,
  SocialIcon,
  FooterMenu
} from "./footer.styles";

import Logo from "../logo/logo.component";

const Footer = () => (
  <FooterContainer>
    <FooterInnerContainer>
      <div>
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
      </div>
      <FooterMenu>
        <table>
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
              <td>Consoles</td>
              <td>Find A Store</td>
              <td>My Account</td>
            </tr>
            <tr>
              <td>Games</td>
              <td>About Us</td>
              <td>Order Tracking</td>
            </tr>
            <tr>
              <td>Accessories</td>
              <td>Contact Us</td>
              <td>Wish List</td>
            </tr>
            <tr>
              <td>Laptops</td>
              <td>Careers</td>
              <td>Customer Service</td>
            </tr>
            <tr>
              <td>TVs / Monitors</td>
              <td>Gift Cards</td>
              <td>Returns / Exchange</td>
            </tr>
          </tbody>
        </table>
      </FooterMenu>
    </FooterInnerContainer>
  </FooterContainer>
);

export default Footer;
