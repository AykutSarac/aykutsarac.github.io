import { Container } from "components/Container";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 50px;
  opacity: 1;
  transition: opacity 1s;
  padding: 32px;
  line-height: 1.6;
  text-align: center;
  margin: 20px auto;

  @media only screen and (min-width: 720px) {
    width: 75%;
  }

  @media only screen and (min-width: 1024px) {
    text-align: initial;
    grid-area: c;
    width: 90%;
    margin: 0;
    letter-spacing: 1px;
  }
`;

const Introduction: React.FC = () => {
  return (
    <StyledContainer>
      I&apos;m a passionate software developer who derives pleasure from solving
      problems, a self-learner with the ability to adapt new environments
      quickly and pleased in gaining new experiences while developing robust
      code for next-generation applications.
    </StyledContainer>
  );
};

export default Introduction;
