import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Container from "components/Container";
import Header from "containers/Header";
import Projects from "containers/Projects";
import { BlogPost, filteredRepos, Repository } from "constants/types";
import Blog from "containers/Blog";
import Skills from "containers/Skills";
import Contact from "containers/Contact";
import styled from "styled-components";

interface Props {
  repos: Repository[];
  blogPosts: BlogPost[];
}

const StyledContainer = styled(Container)`
  padding: 60px 0 0;
`;

const Home: NextPage<Props> = ({ repos, blogPosts }) => {
  return (
    <div>
      <Head>
        <title>Aykut Saraç</title>
      </Head>
      <StyledContainer>
        <Header />
        <Projects repos={repos} />
        <Skills />
        <Blog posts={blogPosts} />
        <Contact />
      </StyledContainer>
    </div>
  );
};

const sortByStar = (a: Repository, b: Repository) => {
  if (!a.stargazers_count || !b.stargazers_count) return 0;

  if (a.stargazers_count > b.stargazers_count) return -1;
  return 1;
};

const filterRepos = (repo: Repository) => {
  if (!filteredRepos.includes(repo.id)) return repo;
};

export const getStaticProps: GetStaticProps = async () => {
  const medium = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aykutsarac"
  );
  const res = await fetch("https://api.github.com/users/aykutsarac/repos");
  
  const repos = await res.json();
  const blogPosts = await medium.json();

  return {
    props: {
      repos: repos.sort(sortByStar).filter(filterRepos).slice(0, 5),
      blogPosts: blogPosts.items.slice(0, 5),
    },
  };
};

export default Home;
