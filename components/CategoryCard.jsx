import React from "react";

//mui
import { Typography } from "@material-ui/core";

//components
import { TertiaryButton } from "./Buttons";

const CategoryCard = ({ src, title }) => {
  return (
    <div className="relative flex flex-col items-center">
      <img
        src={src}
        alt=""
        className={`absolute w-40  ${
          title === "earphones" ? "-top-10" : "-top-12"
        }`}
      />

      <div className="flex flex-col items-center justify-center w-full px-10 pt-24 pb-10 rounded-lg bg-grey">
        <Typography className="font-bold tracking-wider uppercase">
          {title}
        </Typography>

        <TertiaryButton />
      </div>
    </div>
  );
};

export default CategoryCard;
