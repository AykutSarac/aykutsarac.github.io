import Container from "components/Container";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  text-align: center;
  margin-top: 80px;
  opacity: 1;
  transition: opacity 1s;
  padding: 32px;
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
