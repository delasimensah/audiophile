import React, { useState } from "react";
import { IoCartOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import addCommas from "../utils/addCommasToPrice";

//mui
import { Badge, Popover, Typography, Button } from "@material-ui/core";

//components
import { PrimaryButton } from "./Buttons";

const Cart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const cart = [
    // {
    //   id: 1,
    //   image: "/assets/product-yx1-earphones/mobile/image-product.jpg",
    //   name: "YX1 Wireless Earphones",
    //   quantity: 2,
    //   price: 599,
    // },
  ];

  const total = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

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
            "mt-10 w-[80%] md:w-[45%] lg:w-[40%] xl:w-[25%] flex flex-col h-[400px] p-5 space-y-5",
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
            disabled={cart.length === 0}
          >
            Remove all
          </Button>
        </div>
        <div className="flex-grow space-y-3 overflow-y-scroll">
          {cart.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <Typography className="text-primary">
                Your cart is empty
              </Typography>
            </div>
          )}

          {cart.map((product) => {
            return (
              <div key={product.id} className="flex items-center space-x-3">
                <div className="w-10 h-10 overflow-hidden border rounded-lg">
                  <img
                    src={product.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-grow">
                  <Typography className="text-[11px] uppercase font-semibold">
                    {product.name}
                  </Typography>
                  <Typography className="text-[11px] font-semibold text-gray-500">
                    $ {addCommas(product.price)}
                  </Typography>
                </div>

                <div className="flex items-center bg-grey">
                  <Button className="min-w-0 p-[6px]">
                    <IoRemoveOutline className="" />
                  </Button>

                  <div className="flex items-center justify-center px-2">
                    <Typography className="text-center text-[10px] font-semibold">
                      {product.quantity}
                    </Typography>
                  </div>

                  <Button className="min-w-0 p-[6px]">
                    <IoAddOutline className="" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <Typography className="tracking-wider text-gray-500 uppercase">
              Total
            </Typography>

            <Typography className="font-semibold tracking-wider uppercase">
              $ {addCommas(total)}
            </Typography>
          </div>

          <div>
            <PrimaryButton
              text="checkout"
              link="/checkout"
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
