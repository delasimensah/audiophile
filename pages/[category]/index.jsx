import React from "react";
import { useRouter } from "next/router";
import { Fade, Zoom } from "react-reveal";

//mui
import { Typography } from "@material-ui/core";

//components
import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import Product from "../../components/Product";

const headphones = [
  {
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound",
    images: "lg:bg-xx992 bg-xx992-sm md:bg-xx992-md",
    recent: true,
    slug: "/headphones/xx99-mark-two-headphones",
  },
  {
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    images: "lg:bg-xx991 bg-xx991-sm md:bg-xx991-md",
    slug: "/headphones/xx99-mark-one-headphones",
  },
  {
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    images: "lg:bg-xx59 bg-xx59-sm md:bg-xx59-md",
    slug: "/headphones/xx59-headphones",
  },
];

const speakers = [
  {
    name: "ZX9 speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    images: "lg:bg-zx9 bg-zx9-sm md:bg-zx9-md",
    recent: true,
    slug: "/speakers/zx9-speaker",
  },
  {
    name: "ZX7 speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    images: "lg:bg-zx7 bg-zx7-sm md:bg-zx7-md",
    slug: "/speakers/zx7-speaker",
  },
];

const earphones = [
  {
    name: "YX1 wireless earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    images: "lg:bg-yx1 bg-yx1-sm md:bg-yx1-md",
    recent: true,
    slug: "/earphones/yx1-earphones",
  },
];

const category = () => {
  const {
    query: { category },
  } = useRouter();

  return (
    <Layout>
      <div className="flex items-center justify-center pt-40 pb-20 text-white bg-dark">
        <Zoom>
          <Typography className="text-2xl font-semibold tracking-widest uppercase">
            {category}
          </Typography>
        </Zoom>
      </div>

      <div className="pt-20 space-y-20 padding-h">
        {category === "headphones" &&
          headphones.map((product, idx) => {
            return <Product product={product} idx={idx + 1} key={idx} />;
          })}

        {category === "speakers" &&
          speakers.map((product, idx) => {
            return <Product product={product} idx={idx + 1} key={idx} />;
          })}

        {category === "earphones" &&
          earphones.map((product, idx) => {
            return <Product product={product} idx={idx + 1} key={idx} />;
          })}
      </div>

      <Categories />
    </Layout>
  );
};

export default category;
