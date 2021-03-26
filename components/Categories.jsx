import React from "react";

//components
import CategoryCard from "./CategoryCard";

const categories = [
  {
    src: "/assets/shared/desktop/image-headphones.png",
    title: "headphones",
    link: "/headphones",
  },
  {
    src: "/assets/shared/desktop/image-speakers.png",
    title: "speakers",
    link: "/speakers",
  },
  {
    src: "/assets/shared/desktop/image-earphones.png",
    title: "earphones",
    link: "/earphones",
  },
];

const Categories = () => {
  return (
    <div className="grid gap-20 py-40 md:gap-10 padding-h md:grid-cols-3">
      {categories.map(({ src, title, link }, idx) => {
        return <CategoryCard key={idx} src={src} title={title} link={link} />;
      })}
    </div>
  );
};

export default Categories;
