import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";

//mui
import { Dialog } from "@material-ui/core";

const ProductImage = ({ image }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="overflow-hidden transition duration-500 ease-in-out rounded-lg cursor-pointer md:last-of-type:row-start-1 md:last-of-type:col-start-2 md:last-of-type:row-span-2 hover:scale-105"
        onClick={handleClickOpen}
      >
        <img src={image.mobile} alt="" className="w-full h-full md:hidden" />
        <img
          src={image.tablet}
          alt=""
          className="hidden w-full h-full md:block lg:hidden"
        />
        <img
          src={image.desktop}
          alt=""
          className="hidden w-full h-full lg:block"
        />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <Lightbox image={image.desktop} onClose={handleClose} />
      </Dialog>
    </>
  );
};

export default ProductImage;
