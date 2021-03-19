import React from "react";

//mui
// import { Typography } from "@material-ui/core";

//components
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
    </Layout>
  );
};

export default Home;
