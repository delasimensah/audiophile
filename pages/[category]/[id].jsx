import React from "react";
import data from "../../utils/data.json";
import { useRouter } from "next/router";

//components
import Layout from "../../components/Layout";

const productDetails = () => {
  const {
    query: { id },
  } = useRouter();

  const product = data.find((data) => data.slug === id);

  return (
    <Layout>
      <div className="h-20"></div>
      <h1>{product?.name}</h1>
    </Layout>
  );
};

export default productDetails;
