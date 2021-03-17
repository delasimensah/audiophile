import React from "react";

//components
import Layout from "../components/Layout";
import { PrimaryButton } from "../components/Buttons";

const Home = () => {
  return (
    <Layout>
      <div className="w-full h-screen bg-center bg-no-repeat bg-cover bg-hero-sm md:bg-hero-md lg:bg-hero"></div>
    </Layout>
  );
};

export default Home;
