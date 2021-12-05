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
  margin: 80px 0;
  opacity: 1;
  transition: opacity 1s;
  background: ${({ theme }) => theme.transparent};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 32px 64px;
`;

const StyledHeading = styled.h2``;

const Growtopian: Repository = {
  id: 1,
  description:
    "Growtopian is a discord bot serving over 2500 servers and 150,000 active users daily.",
  html_url: "https://growtopian.xyz",
  name: "Growtopian",
};

const filteredRepos = [345075300];

const Projects: React.FC<ProjectsProps> = ({ repos }) => {
  const sortByStar = (a: Repository, b: Repository) => {
    if (!a.stargazers_count || !b.stargazers_count) return 0;

    if (a.stargazers_count > b.stargazers_count) return -1;
    return 1;
  };

  const filterRepos = (repo: Repository) => {
    if (!filteredRepos.includes(repo.id)) return repo;
  };

  return (
    <StyledContainer>
      <StyledHeading>Projects</StyledHeading>
      <LinkCard repo={Growtopian} />
      {repos
        .sort(sortByStar)
        .filter(filterRepos)
        .slice(0, 4)
        .map((data) => (
          <LinkCard repo={data} key={data.id} />
        ))}
      <Button href="https://github.com/AykutSarac">View More</Button>
    </StyledContainer>
  );
};

export default Projects;
