import React from "react";
import { useRouter } from "next/router";
import addCommas from "../utils/addCommasToPrice";

//mui
import { Button, Typography } from "@material-ui/core";

//components
import Layout from "../components/Layout";
import CheckoutModal from "../components/CheckoutModal";

const checkout = () => {
  const { back } = useRouter();

  const shipping = 0;

  const vat = 0;

  const cart = [
    {
      id: 1,
      image: "/assets/product-yx1-earphones/mobile/image-product.jpg",
      name: "YX1 Wireless Earphones",
      quantity: 2,
      price: 599,
    },
  ];

  const total = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <Layout>
      <div className="h-full pb-20 padding-h">
        <div className="py-10">
          <Button
            variant="text"
            className="font-semibold capitalize hover:text-primary hover:bg-transparent"
            onClick={() => back()}
            disableRipple
          >
            {" "}
            Go Back
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[3fr,1fr]">
          <div className="">
            <div className="p-10 bg-white rounded-lg">
              <Typography className="text-2xl font-semibold uppercase">
                Checkout
              </Typography>
            </div>
          </div>

          <div className="flex flex-col space-y-5 p-5 bg-white rounded-lg  h-[500px]">
            <div>
              <Typography className="font-semibold uppercase">
                Summary
              </Typography>
            </div>

            <div className="flex-grow space-y-3 overflow-y-scroll">
              {cart.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <Typography className="text-center text-primary">
                    Your cart is empty.
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

                    <div className="">
                      <Typography className="text-sm font-semibold text-gray-500">
                        x{product.quantity}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Typography className="text-sm text-gray-500 uppercase">
                  total
                </Typography>

                <Typography className="text-sm font-semibold uppercase">
                  ${addCommas(total)}
                </Typography>
              </div>

              <div className="flex items-center justify-between">
                <Typography className="text-sm text-gray-500 uppercase">
                  shipping
                </Typography>

                <Typography className="text-sm font-semibold uppercase">
                  ${addCommas(shipping)}
                </Typography>
              </div>

              <div className="flex items-center justify-between">
                <Typography className="text-sm text-gray-500 uppercase">
                  vat (included)
                </Typography>

                <Typography className="text-sm font-semibold uppercase">
                  ${addCommas(vat)}
                </Typography>
              </div>

              <div className="flex items-center justify-between">
                <Typography className="text-sm text-gray-500 uppercase">
                  grand total
                </Typography>

                <Typography className="text-sm font-semibold uppercase text-primary">
                  ${addCommas(total + shipping + vat)}
                </Typography>
              </div>
            </div>

            <CheckoutModal cart={cart} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default checkout;
