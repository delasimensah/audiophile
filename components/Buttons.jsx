import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

//mui
import { Button } from "@material-ui/core";

export const PrimaryButton = () => {
  return (
    <Button className="px-6 py-3 text-sm text-white rounded-none bg-primary hover:bg-primaryLt ">
      see product
    </Button>
  );
};

export const SecondaryButton = () => {
  return (
    <Button
      variant="outlined"
      className="px-6 py-3 text-sm text-white rounded-none hover:bg-transparent hover:text-dark hover:border-dark bg-dark"
    >
      see product
    </Button>
  );
};

export const SecondaryButtonAlt = () => {
  return (
    <Button
      variant="outlined"
      className="px-6 py-3 text-sm bg-transparent rounded-none hover:text-white text-dark border-dark hover:bg-dark"
    >
      see product
    </Button>
  );
};

export const TertiaryButton = () => {
  return (
    <Button
      variant="text"
      className="text-sm hover:bg-transparent hover:text-primary"
      endIcon={<IoChevronForwardOutline className="w-4 h-4 text-primary" />}
    >
      shop
    </Button>
  );
};
