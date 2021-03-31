import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useRouter } from "next/router";

//mui
import { Button } from "@material-ui/core";

export const PrimaryButton = ({ text, link, onClick, fullWidth, disabled }) => {
  const { push } = useRouter();

  return (
    <Button
      className="px-6 py-3 text-sm text-white rounded-none bg-primary hover:bg-primaryLt "
      onClick={link ? () => push(link) : onClick}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export const SecondaryButton = ({ link }) => {
  const { push } = useRouter();

  return (
    <Button
      variant="outlined"
      className="px-6 py-3 text-sm text-white rounded-none hover:bg-transparent hover:text-dark hover:border-dark bg-dark"
      onClick={() => push(link)}
    >
      see product
    </Button>
  );
};

export const SecondaryButtonAlt = ({ link }) => {
  const { push } = useRouter();

  return (
    <Button
      variant="outlined"
      className="px-6 py-3 text-sm bg-transparent rounded-none hover:text-white text-dark border-dark hover:bg-dark"
      onClick={() => push(link)}
    >
      see product
    </Button>
  );
};

export const TertiaryButton = ({ link }) => {
  const { push } = useRouter();

  return (
    <Button
      variant="text"
      className="text-sm hover:bg-transparent hover:text-primary"
      endIcon={<IoChevronForwardOutline className="w-4 h-4 text-primary" />}
      onClick={() => push(link)}
    >
      shop
    </Button>
  );
};
