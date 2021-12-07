import ArticleCard from "components/ArticleCard";
import Button from "components/Button";
import Container from "components/Container";
import { BlogPost } from "constants/types";
import React from "react";
import styled from "styled-components";

interface BlogProps {
  posts: BlogPost[];
}

const StyledContainer = styled(Container)`
  padding: 0 32px 64px;
  margin: 80px auto 20px;

  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`;

const StyleHeading = styled.h2``;

const StyledBlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <StyledContainer>
      <StyleHeading>Blog</StyleHeading>
      <StyledBlogWrapper>
        {posts.map((post) => (
          <ArticleCard post={post} key={post.guid} />
        ))}
      </StyledBlogWrapper>
      <Button href="https://aykutsarac.medium.com/">Read more at Medium</Button>
    </StyledContainer>
  );
};

export default Blog;
