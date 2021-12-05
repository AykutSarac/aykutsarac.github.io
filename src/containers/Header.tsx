import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import avatar from "../../public/avatar.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const StyledHeading = styled.h1<{ animate?: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.mainColor};
  width: 100%;
  margin: 10px 0 0;
  width: fit-content;

  &:first-of-type::before {
    position: absolute;
    content: "Hi, I'm Aykut";
    left: 0;
    transform: translate(1px, 1px);
    color: ${({ theme }) => theme.main};
  }

  &:last-of-type {
    opacity: 0;
    animation: ${fadeIn} 1.5s 0.5s forwards;

    ::before {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 20px;
      content: "";
      height: 30px;
      width: 100%;
      transform: translateY(100%);
      background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg");
      background-repeat: no-repeat;
    }
  }
`;

const StyledImageWrapper = styled.div`
  object-fit: cover;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage src={avatar} alt="aykut saraç" width="150" height="150" />
      </StyledImageWrapper>
      <StyledHeading>Hi, I&apos;m Aykut</StyledHeading>
      <StyledHeading animate>Software Engineer.</StyledHeading>
    </StyledHeader>
  );
};

export default Header;
