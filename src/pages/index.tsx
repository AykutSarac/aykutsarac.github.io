import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Container from "components/Container";
import { BlogPost, filteredRepos, Repository } from "constants/types";
import styled from "styled-components";

import Header from "containers/Header";
const Blog = dynamic(() => import("containers/Blog"));
const Projects = dynamic(() => import("containers/Projects"));
const Skills = dynamic(() => import("containers/Skills"));
const Contact = dynamic(() => import("containers/Contact"));

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
        <meta
          name="description"
          content="I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."
        />
        <meta name="image" content="https://aykutsarac.github.io/favicon.ico" />

        <meta itemProp="name" content="Aykut Saraç" />
        <meta
          itemProp="description"
          content="I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."
        />
        <meta
          itemProp="image"
          content="https://aykutsarac.github.io/favicon.ico"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Aykut Saraç" />
        <meta
          name="twitter:description"
          content="I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."
        />

        <meta name="og:title" content="Aykut Saraç" />
        <meta
          name="og:description"
          content="I'm a passionate software developer who derives pleasure from solving problems, a self-learner with the ability to adapt new environments quickly and pleased in gaining new experiences while developing robust code for next-generation applications."
        />
        <meta name="og:type" content="website"></meta>
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
