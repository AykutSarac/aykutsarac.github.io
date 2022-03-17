import { ArticleCard } from "components/ArticleCard";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { BlogPost } from "constants/types";
import React from "react";
import styled from "styled-components";

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

async function getBlogPosts() {
  const medium = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aykutsarac"
  );
  const blogPosts = await medium.json();
  return blogPosts.items.slice(0, 5);
}

const Blog: React.FC = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    getBlogPosts().then((posts) => setPosts(posts));
  }, []);

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
