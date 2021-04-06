import React from "react";
import { useRouter } from "next/router";
import addCommas from "../utils/addCommasToPrice";
import { useCart } from "../contexts/CartContext";

//mui
import {
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

//components
import Layout from "../components/Layout";
import CheckoutModal from "../components/CheckoutModal";
import TextInput from "../components/TextInput";

const checkout = () => {
  const { back } = useRouter();
  const { cart, shipping, vat } = useCart();

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
          <div className="p-5 space-y-10 bg-white rounded-lg md:p-10">
            <div className="">
              <Typography
                className="text-2xl font-semibold uppercase"
                gutterBottom
              >
                Checkout
              </Typography>
            </div>

            <div className="space-y-5">
              <Typography className="text-sm font-semibold tracking-wider uppercase text-primary">
                Billing details
              </Typography>

              <div className="grid gap-5 md:grid-cols-2">
                <TextInput
                  label="name"
                  type="text"
                  placeholder="Delasi Mensah"
                />
                <TextInput
                  label="email address"
                  type="email"
                  placeholder="delasi@mail.com"
                />
                <TextInput
                  label="phone number"
                  type="tel"
                  placeholder="+1 202-555-0136"
                />
              </div>
            </div>

            <div className="space-y-5">
              <Typography className="text-sm font-semibold tracking-wider uppercase text-primary">
                Shipping info
              </Typography>

              <TextInput
                label="address"
                type="text"
                placeholder="1137 Williams Avenue"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <TextInput label="ZIP Code" type="number" placeholder="10001" />
                <TextInput label="city" type="text" placeholder="New York" />
                <TextInput
                  label="country"
                  type="text"
                  placeholder="United States"
                />
              </div>
            </div>

            <div className="space-y-5">
              <Typography className="text-sm font-semibold tracking-wider uppercase text-primary">
                payment details
              </Typography>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <Typography className="text-sm font-semibold tracking-wide capitalize">
                    payment Method
                  </Typography>
                </div>

                <RadioGroup
                  name="payment method"
                  defaultValue="e-Money"
                  className="space-y-5"
                >
                  <FormControlLabel
                    value="e-Money"
                    control={<Radio color="primary" />}
                    label="e-Money"
                    className="p-[3px] m-0 border rounded-lg border-gray-500"
                  />
                  <FormControlLabel
                    value="Cash"
                    control={<Radio color="primary" />}
                    label="Cash on Delivery"
                    className="p-[3px] m-0 border rounded-lg border-gray-500"
                  />
                </RadioGroup>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <TextInput
                  label="e-Money Number"
                  type="number"
                  placeholder="238521993"
                />
                <TextInput
                  label="e-Money Pin"
                  type="number"
                  placeholder="6891"
                />
              </div>
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
