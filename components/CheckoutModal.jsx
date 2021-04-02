import React, { useState } from "react";

//mui
import { Dialog } from "@material-ui/core";

//components
import { PrimaryButton } from "./Buttons";

const CheckoutModal = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PrimaryButton
        text="continue"
        fullWidth
        disabled={cart.length === 0}
        onClick={handleClickOpen}
      />

      <Dialog
        onClose={handleClose}
        open={open}
        classes={{ paperWidthSm: "max-w-none", paper: "overscroll-y-none" }}
      >
        <div className="bg-white w-[350px] md:w-[500px] lg:w-[600px] p-10 ">
          thank you for your order
        </div>
      </Dialog>
    </>
  );
};

export default CheckoutModal;
