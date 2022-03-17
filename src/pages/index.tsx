import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "components/Container";
import styled from "styled-components";

import Header from "containers/Header";
import Blog from "containers/Blog";
import Projects from "containers/Projects";
import Skills from "containers/Skills";
import Contact from "containers/Contact";

const StyledContainer = styled(Container)`
  padding: 60px 0 0;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aykut Saraç</title>
        <meta
          name="google-site-verification"
          content="w5JtX4JtBGbvJ9327WgRKkHMQz47MHMMtltz3WNeJlg"
        />
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
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </StyledContainer>
    </div>
  );
};

export default Home;
