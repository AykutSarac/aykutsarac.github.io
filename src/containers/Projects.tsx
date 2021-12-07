import Button from "components/Button";
import LinkCard from "components/LinkCard";
import Container from "components/Container";
import { Repository } from "constants/types";
import React from "react";
import styled from "styled-components";

interface ProjectsProps {
  repos: Repository[];
}

const StyledContainer = styled(Container)`
  margin: 80px 0 20px;
  opacity: 1;
  transition: opacity 1s;
  padding: 0 32px 64px;

  @media only screen and (min-width: 768px) {
    width: 75%;
    margin: 80px auto 20px;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const StyledHeading = styled.h2``;

const Growtopian: Repository = {
  id: 1,
  description:
    "Growtopian is a discord bot serving over 2500 servers and 150,000 active users daily.",
  html_url: "https://growtopian.xyz",
  name: "Growtopian",
};

const Projects: React.FC<ProjectsProps> = ({ repos }) => {
  return (
    <StyledContainer>
      <StyledHeading>Projects</StyledHeading>
      <StyledCardsWrapper>
        <LinkCard repo={Growtopian} />
        {repos.map((data) => (
          <LinkCard repo={data} key={data.id} />
        ))}
      </StyledCardsWrapper>
      <Button href="https://github.com/AykutSarac">View More at GitHub</Button>
    </StyledContainer>
  );
};

export default Projects;
