import { Button } from "components/Button";
import { Container } from "components/Container";
import { LinkCard } from "components/LinkCard";
import { filteredRepos, Repository } from "constants/types";
import React from "react";
import styled from "styled-components";

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
    "Growtopian is a discord bot serving over 3500 servers and 150,000 active users daily.",
  html_url: "https://growtopian.xyz",
  name: "Growtopian",
};

const sortByStar = (a: Repository, b: Repository) => {
  if (!a.stargazers_count || !b.stargazers_count) return 0;

  if (a.stargazers_count > b.stargazers_count) return -1;
  return 1;
};

const filterRepos = (repo: Repository) => {
  if (!filteredRepos.includes(repo.id)) return repo;
};

async function getRepos() {
  try {
    const res = await fetch("https://api.github.com/users/aykutsarac/repos");
    const repos = await res.json();
    return repos.sort(sortByStar).filter(filterRepos).slice(0, 3);
  } catch (error) {
    console.error("Couldn't fetch repos.");
  }
}

const Projects: React.FC = () => {
  const [repos, setRepos] = React.useState<Repository[]>([]);

  React.useEffect(() => {
    getRepos().then((repos) => setRepos(repos));
  }, []);

  return (
    <StyledContainer>
      <StyledHeading>Projects</StyledHeading>
      <StyledCardsWrapper>
        <LinkCard repo={Growtopian} />
        {repos?.map((data) => (
          <LinkCard repo={data} key={data.id} />
        ))}
      </StyledCardsWrapper>
      <Button href="https://github.com/AykutSarac">View More at GitHub</Button>
    </StyledContainer>
  );
};

export default Projects;
