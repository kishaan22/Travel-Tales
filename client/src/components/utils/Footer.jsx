import React from "react";
import { IoLogoGithub } from "react-icons/io";
import styled from "styled-components";
import Logo from "../nav/Logo";

const Footer = ({ light }) => {
  return (
    <FooterWrapper className="body-container">
      <Logo light={light} />
      <div className="copyright">
        &copy;{new Date().getFullYear()} Ritik Mewada
        <a
          href="https://github.com/ritik-mewada/travel-tales"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoLogoGithub className="icon" />
        </a>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  flex-direction: column;

  .copyright {
    margin-top: 1rem;
  }

  a {
    margin: 0 0.3rem;
  }

  .icon {
    font-size: 1.5rem;
    color: #000;
    vertical-align: middle;
    margin-top: -4px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .copyright {
      margin-top: 0;
    }
  }
`;

export default Footer;
