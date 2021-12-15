import { BlogPost } from "constants/types";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

interface ArticleCardProps {
  post: BlogPost;
}

const StyledArticleCard = styled.a`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.main};

  &:last-of-type {
    border-bottom: none;
  }
`;

const StyledArticleBody = styled.div``;

const StyledArticleDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.lightblue};
  opacity: 0.5;
`;

const StyledArticleTitle = styled.h3`
  color: ${({ theme }) => theme.lightblue};
  margin-top: 0;
`;

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <Link href={post.link} passHref>
      <StyledArticleCard target="_blank" rel="noopener">
        <StyledArticleBody>
          <StyledArticleDate>
            {dayjs(post.pubDate).format("ll")}
          </StyledArticleDate>
          <StyledArticleTitle>{post.title}</StyledArticleTitle>
        </StyledArticleBody>
      </StyledArticleCard>
    </Link>
  );
};

export default ArticleCard;
