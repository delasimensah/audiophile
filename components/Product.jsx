import React from "react";
import { Fade, Zoom } from "react-reveal";

//mui
import { Typography } from "@material-ui/core";

//components
import { PrimaryButton } from "./Buttons";

const Product = ({
  product: { name, description, images, recent, slug },
  idx,
}) => {
  return (
    <div className="grid lg:gap-20 lg:grid-cols-[1fr,1fr]">
      <Zoom>
        <div
          className={`${images} lg:h-[560px] h-[350px]  bg-cover bg-center rounded-lg overflow-hidden ${
            idx % 2 === 0 && "lg:col-start-2"
          }`}
        />
      </Zoom>

      <Fade left cascade distance="150px">
        <div
          className={`flex-col justify-center py-10 space-y-5 lg:py-0 lg:flex ${
            idx % 2 === 0 && "lg:col-start-1 lg:row-start-1"
          }`}
        >
          {recent && (
            <div>
              <Typography
                className="text-xl text-center uppercase lg:text-left text-primary"
                style={{ letterSpacing: 10 }}
              >
                new product
              </Typography>
            </div>
          )}
          <div className="flex justify-center lg:block">
            <Typography
              className={`text-center font-semibold uppercase lg:text-left text-3xl md:text-[45px] leading-tight ${
                name.includes("speaker") ? "md:w-[40%] lg:w-[50%]" : "w-[57.1%]"
              }`}
            >
              {name}
            </Typography>
          </div>

          <div className="flex justify-center lg:block">
            <Typography className="text-center lg:text-left w-[89%]">
              {description}
            </Typography>
          </div>

          <div className="flex justify-center lg:block">
            <PrimaryButton text="see product" link={slug} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Product;
