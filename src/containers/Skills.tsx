import Container from "components/Container";
import IconCard from "components/IconCard";
import React from "react";
import styled from "styled-components";
import { FaJs, FaVuejs, FaGitAlt, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 64px 0 128px;

  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`;

const StyledSkillsSection = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 0 10%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledSkills = styled(Container)`
  background: ${({ theme }) => theme.transparent};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h2`
  margin-bottom: 32px;
`;

const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <StyledContainer>
        <StyledHeading>Skills</StyledHeading>
        <StyledSkillsSection>
          <IconCard color="#efd81d">
            <FaJs /> JavaScript
          </IconCard>
          <IconCard color="#3fb27f">
            <FaVuejs /> VueJS
          </IconCard>
          <IconCard color="#2f74c0">
            <SiTypescript /> TypeScript
          </IconCard>
          <IconCard color="#00d1f7">
            <FaReact /> React
          </IconCard>
          <IconCard color="#88c140">
            <FaNodeJs /> NodeJS
          </IconCard>
          <IconCard color="#c76395">
            <FaSass /> Sass
          </IconCard>
          <IconCard color="#e84d31">
            <FaGitAlt /> Git
          </IconCard>
          <IconCard color="#50ae3f">
            <SiMongodb /> MongoDB
          </IconCard>
        </StyledSkillsSection>
      </StyledContainer>
    </StyledSkills>
  );
};

export default Skills;
