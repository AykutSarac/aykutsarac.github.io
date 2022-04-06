import React from "react";
import styled from "styled-components";
import Introduction from "./Introduction";
import Contact from "./Contact";

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

  ::before {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    content: "";
    height: 30px;
    width: 100%;
    transform: translateY(100%);
    background-image: url("underline.svg");
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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
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
        <StyledImage src="/avatar.jpeg" alt="aykut" />
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
