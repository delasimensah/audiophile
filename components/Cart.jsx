import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

//mui
import { Badge, Popover, Typography, Button } from "@material-ui/core";

//components
import { PrimaryButton } from "./Buttons";

const Cart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cart, setCart] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div className="cursor-pointer" onClick={handleClick}>
        <Badge badgeContent={cart.length} color="primary">
          <IoCartOutline className="w-7 h-7" />
        </Badge>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="bg-black/50"
        classes={{
          paper:
            "mt-10 w-[75%] md:w-[45%] lg:w-[40%] xl:w-[25%] flex flex-col h-[400px] p-5 space-y-5",
        }}
      >
        <div className="flex items-center justify-between ">
          <Typography className="font-semibold uppercase">
            Cart ({cart.length})
          </Typography>

          <Button
            variant="text"
            className="underline capitalize hover:text-primary hover:bg-transparent"
            disableRipple
          >
            Remove all
          </Button>
        </div>
        <div className="flex-grow overflow-y-scroll">
          {cart.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <Typography className="text-primary">
                Your cart is empty
              </Typography>
            </div>
          )}
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <Typography className="tracking-wider text-gray-500 uppercase">
              Total
            </Typography>

            <Typography className="tracking-wider uppercase">$ 0</Typography>
          </div>

          <div>
            <PrimaryButton
              text="checkout"
              fullWidth
              disabled={cart.length === 0}
            />
          </div>
        </div>
      </Popover>
    </>
  );
};

export default Cart;
