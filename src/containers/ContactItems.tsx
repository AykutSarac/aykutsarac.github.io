import React from "react";

import styled from "styled-components";
import Link from "next/link";
import { FaMedium, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

interface ContactItemProps {
  href: string;
}

const StyledContactWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    width: 75%;
  }
`;

const StyledContactItem = styled.a`
  color: ${({ theme }) => theme.lightblue};
  opacity: 0.5;
`;

const ContactItem: React.FC<ContactItemProps> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <StyledContactItem target="_blank">{children}</StyledContactItem>
    </Link>
  );
};

const ContactItems = () => {
  return (
    <StyledContactWrapper>
      <ContactItem href="https://github.com/AykutSarac">
        <FaGithub />
      </ContactItem>
      <ContactItem href="https://aykutsarac.medium.com/">
        <FaMedium />
      </ContactItem>
      <ContactItem href="https://twitter.com/aykutsarach">
        <FaTwitter />
      </ContactItem>
      <ContactItem href="https://www.linkedin.com/in/aykutsarac/">
        <FaLinkedin />
      </ContactItem>
    </StyledContactWrapper>
  );
};

export default ContactItems;
