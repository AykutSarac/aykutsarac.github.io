import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Container from "components/Container";
import Header from "containers/Header";
import Navbar from "components/Navbar";
import Projects from "containers/Projects";
import Introduction from "containers/Introduction";
import { Repository } from "constants/types";

interface Props {
  repos: Repository[];
}

const Home: NextPage<Props> = ({ repos }) => {
  return (
    <div>
      <Head>
        <title>Aykut Saraç</title>
      </Head>
      <Container>
        <Navbar />
        <Header />
        <Introduction />
        <Projects repos={repos} />
      </Container>
    </div>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/aykutsarac/repos");
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
};

export default Home;
