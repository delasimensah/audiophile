import React from "react";
import { Fade } from "react-reveal";

//mui
import { Typography } from "@material-ui/core";

const Info = () => {
  return (
    <div className="grid gap-10 pt-10 pb-20 padding-h lg:grid-cols-2 bg-greyLt">
      <div className="lg:hidden bg-info-img-sm md:bg-info-img-md h-[320px] md:h-[300px] bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden"></div>

      <Fade left cascade distance="90px">
        <div className="flex flex-col justify-center space-y-5">
          <div className="flex justify-center lg:justify-start">
            <Typography
              component="h2"
              className=" md:w-[60%] lg:w-3/4 uppercase lg:text-[40px] leading-tight font-semibold tracking-wider lg:text-left text-center text-[30px]"
            >
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </Typography>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Typography className="tracking-wide font-extralight w-[87%] lg:w-[89%] text-center lg:text-left">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Typography>
          </div>
        </div>
      </Fade>

      <div className="hidden lg:block lg:bg-info-img lg:h-[500px] bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden"></div>
    </div>
  );
};

export default Info;
