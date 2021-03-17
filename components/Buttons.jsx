import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

//mui
import { Button } from "@material-ui/core";

export const PrimaryButton = () => {
  return (
    <Button className="px-4 text-[12px] text-white rounded-none bg-primary hover:bg-primaryLt ">
      see product
    </Button>
  );
};

export const SecondaryButton = () => {
  return (
    <Button
      variant="outlined"
      className="px-4 text-[12px] border-dark rounded-none hover:bg-dark hover:text-white"
    >
      see product
    </Button>
  );
};

export const TertiaryButton = () => {
  return (
    <Button
      variant="text"
      className="text-[12px] hover:bg-transparent hover:text-primary"
      disableTouchRipple
      endIcon={<IoChevronForwardOutline className="w-4 h-4 text-primary" />}
    >
      shop
    </Button>
  );
};
