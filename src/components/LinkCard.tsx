import { Repository } from "constants/types";
import Link from "next/link";
import React from "react";
import styled, { DefaultTheme } from "styled-components";

interface CardProps {
  repo: Repository;
}

function getStarCountColor(theme: DefaultTheme, starCount?: number) {
  if (!starCount || starCount > 200) return theme.red;
  if (starCount > 100) return theme.violet;
  if (starCount > 50) return theme.lightgreen;
  if (starCount > 5) return theme.yellow;
  return theme.transparent;
}

const StyledCard = styled.div<{ starCount?: number }>`
  position: relative;
  padding: 24px;
  background: ${({ theme }) => theme.transparent};
  min-height: 180px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ starCount, theme }) =>
      getStarCountColor(theme, starCount)};
    content: "";
    width: 100%;
    height: 5px;
    border-radius: 5px 5px 0 0;
  }
`;

const StyledCardHeader = styled.div<{ starCount?: number }>`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  color: ${({ starCount, theme }) => getStarCountColor(theme, starCount)};
  align-items: center;
`;

const StyledCardTitle = styled.div``;

const StyledStarCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.mainColor};
`;

const StyledCardBody = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  flex: 1;
`;

export const LinkCard: React.FC<CardProps> = ({ repo }) => {
  return (
    <Link href={repo.html_url}>
      <a target="_blank" rel="noopener">
        <StyledCard starCount={repo.stargazers_count}>
          <StyledCardHeader starCount={repo.stargazers_count}>
            <StyledCardTitle>{repo.name}</StyledCardTitle>
            {repo.stargazers_count && (
              <StyledStarCount>{repo.stargazers_count} ⭐</StyledStarCount>
            )}
          </StyledCardHeader>
          <StyledCardBody>{repo.description}</StyledCardBody>
        </StyledCard>
      </a>
    </Link>
  );
};
