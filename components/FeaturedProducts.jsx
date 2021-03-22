import React from "react";

//mui
import { Typography } from "@material-ui/core";

//components
import { SecondaryButton, SecondaryButtonAlt } from "../components/Buttons";

const FeaturedProducts = () => {
  return (
    <div className="pb-20 space-y-10 padding-h">
      <div className="relative grid gap-10 overflow-hidden rounded-lg md:px-20 bg-primary lg:grid-cols-2">
        <img
          src="/assets/home/desktop/pattern-circles.svg"
          alt=""
          className="absolute top-0 left-0 z-10 scale-150 lg:-left-48 md:scale-125 lg:scale-100"
        />

        <div className="z-50 flex items-end justify-center pt-20 md:pt-20 lg:pt-0">
          <div className="w-40 overflow-hidden md:w-60 lg:w-72">
            <img
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt=""
              className=""
            />
          </div>
        </div>

        <div className="z-50 py-10 space-y-5 text-white md:py-16 lg:py-24">
          <div className="flex items-center justify-center lg:justify-start">
            <Typography
              component="h2"
              className="w-2/3 text-5xl font-semibold text-center uppercase md:text-6xl lg:text-left"
            >
              zx9 speaker
            </Typography>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <Typography className="w-5/6 tracking-wider text-center md:w-3/4 font-extralight lg:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
          </div>

          <div className="flex items-center justify-center pt-5 lg:justify-start">
            <SecondaryButton />
          </div>
        </div>
      </div>

      <div className="flex items-center px-5 md:px-10 bg-speaker-sm md:bg-speaker-md h-[320px] lg:bg-speaker bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden">
        <div className="space-y-5 md:w-1/2">
          <Typography
            component="h3"
            className="text-3xl font-semibold tracking-wider uppercase md:text-4xl"
          >
            ZX7 speaker
          </Typography>

          <SecondaryButtonAlt />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="h-[200px] bg-earphones-sm md:bg-earphones-md md:h-[320px] lg:bg-earphones bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden"></div>

        <div className="flex flex-col justify-center px-5 space-y-5 bg-grey md:px-10 h-[200px] md:h-auto rounded-lg">
          <Typography
            component="h3"
            className="text-3xl font-semibold tracking-wider uppercase md:text-4xl"
          >
            YX1 earphones
          </Typography>

          <div>
            <SecondaryButtonAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
