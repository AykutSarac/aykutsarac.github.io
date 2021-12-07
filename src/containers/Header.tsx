import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import Introduction from "./Introduction";
import ContactItems from "./ContactItems";
import Contact from "./Contact";

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
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-areas:
      "a b"
      "c d";
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 2fr;
    width: 75%;
    margin: 80px auto 20px;
    padding: 0 32px;
  }
`;

const StyledHeading = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.mainColor};
  margin: 10px 0 0;
  width: fit-content;

  ::before {
    position: absolute;
    content: "Hi, I'm Aykut";
    left: 0;
    transform: translate(1px, 1px);
    color: ${({ theme }) => theme.main};
  }
`;

const StyledSubHeading = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.mainColor};
  margin: 10px 0 0;
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
`;

const StyledImageWrapper = styled.div`
  position: relative;
  margin: 30px auto;
  width: 120px;
  height: 120px;

  @media only screen and (min-width: 768px) {
    grid-area: b;
    width: 180px;
    height: 180px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledProfileSection = styled.div`
  grid-area: a;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const StyledContact = styled(Contact)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px 0;
  overflow: visible;
  background: none;

  &::before {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 50%, 50% 100%, 50% 100%, 40% 50%, 0 50%);
    background: ${({ theme }) => theme.body};
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    transform: translateY(-30%);
    content: "";
  }

  & > div {
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    padding: 16px 0;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage src={avatar} alt="aykut" layout="fill" objectFit="cover" />
      </StyledImageWrapper>
      <StyledProfileSection>
        <StyledHeading>Hi, I&apos;m Aykut</StyledHeading>
        <StyledSubHeading>Software Engineer.</StyledSubHeading>
      </StyledProfileSection>
      <Introduction />
      <StyledContact />
    </StyledHeader>
  );
};

export default Header;
