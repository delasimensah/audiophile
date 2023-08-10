import React from "react";
import { Fade } from "react-reveal";

//mui
import { Typography } from "@material-ui/core";

//components
import { PrimaryButton } from "./Buttons";

const Hero = () => {
  return (
    <div className="flex items-center w-full h-screen pt-10 bg-center bg-no-repeat bg-cover bg-hero-sm md:bg-hero-md lg:bg-hero padding-h">
      <Fade distance="100px" left cascade>
        <div className="space-y-5 text-white lg:w-1/2">
          <Typography
            variant="h6"
            className="text-center uppercase lg:text-left font-extralight"
            style={{ letterSpacing: 10 }}
          >
            new product
          </Typography>

          <Typography className="text-4xl font-bold tracking-wide text-center uppercase md:text-6xl lg:text-left">
            XX99 Mark II Headphones
          </Typography>

          <div className="flex justify-center lg:justify-start">
            <Typography className="font-light tracking-wide text-center lg:w-96 lg:text-left md:w-96">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
          </div>

          <div className="flex items-center justify-center pt-10 lg:justify-start">
            <PrimaryButton
              text="see product"
              link="/headphones/xx99-mark-two-headphones"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
