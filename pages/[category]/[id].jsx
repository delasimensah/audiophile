import React, { useState } from "react";
import data from "../../utils/data.json";
import { useRouter } from "next/router";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import addCommas from "../../utils/addCommasToPrice";
import { useCart } from "../../contexts/CartContext";

//mui
import { Button, Typography } from "@material-ui/core";

//components
import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import { PrimaryButton } from "../../components/Buttons";
import ProductImage from "../../components/ProductImage";

const productDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const {
    back,
    query: { id },
  } = useRouter();

  const decrease = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const product = data.find((data) => data.slug === id);

  return (
    <Layout>
      <div className="pb-20 space-y-20 padding-h">
        <div className="pt-10">
          <Button
            variant="text"
            className="font-semibold capitalize hover:bg-transparent hover:text-primary"
            onClick={() => back()}
            disableRipple
          >
            {" "}
            Go Back
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="h-[327px] md:h-[480px] lg:h-[560px]">
            <img
              src={product?.image.mobile}
              alt=""
              className="w-full h-full md:hidden"
            />
            <img
              src={product?.image.tablet}
              alt=""
              className="hidden w-full h-full md:block lg:hidden"
            />
            <img
              src={product?.image.desktop}
              alt=""
              className="hidden w-full h-full lg:block"
            />
          </div>

          <Fade distance="100px" duration={2000}>
            <div className="flex flex-col justify-center space-y-5">
              {product?.recent && (
                <Typography
                  className="uppercase text-primary"
                  style={{ letterSpacing: 10 }}
                >
                  new product
                </Typography>
              )}
              <div className="flex">
                <Typography
                  className={`font-semibold uppercase text-3xl md:text-[29px] lg:text-[45px] leading-tight ${
                    product?.category.includes("speakers")
                      ? "md:w-[40%] lg:w-[50%]"
                      : "w-[57.1%]"
                  }`}
                >
                  {product?.name}
                </Typography>
              </div>

              <Typography className="text-gray-500">
                {product?.description}
              </Typography>
              <Typography className="text-2xl font-semibold tracking-widest">
                $ {product && addCommas(product.price)}
              </Typography>

              <div className="flex items-center space-x-5 ">
                <div className="flex items-center bg-grey">
                  <Button className="py-4 border-0" onClick={decrease}>
                    <IoRemoveOutline className="w-3 h-3" />
                  </Button>

                  <div className="flex items-center justify-center w-7">
                    <Typography className="text-center">{quantity}</Typography>
                  </div>

                  <Button className="py-4 border-0" onClick={increase}>
                    <IoAddOutline className="w-3 h-3" />
                  </Button>
                </div>

                <PrimaryButton
                  text="add to cart"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      image: product.image.mobile,
                      quantity,
                      price: product.price,
                    })
                  }
                />
              </div>
            </div>
          </Fade>
        </div>

        <Fade distance="100px" left cascade>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <Typography className="text-3xl font-semibold tracking-wide uppercase">
                features
              </Typography>
              <Typography className="text-gray-500">
                {product?.features}
              </Typography>
            </div>

            <div className="space-y-5 md:grid-cols-2 md:grid lg:block md:space-y-0 lg:space-y-5">
              <Typography className="text-3xl font-semibold tracking-wide uppercase">
                in the box
              </Typography>

              <div className="space-y-3">
                {product?.includes.map((item, idx) => {
                  return (
                    <Typography key={idx} className="text-lg text-gray-500">
                      <span className="pr-5 text-lg text-primary">
                        {item.quantity}x
                      </span>{" "}
                      {item.item}
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>

        <div className="xl:px-28 md:h-[385px] lg:h-[500px] grid gap-5 md:grid-cols-2">
          {product?.gallery.map((image, idx) => {
            return (
              <ProductImage
                key={idx}
                image={image}
                gallery={product.gallery}
                idx={idx}
              />
            );
          })}
        </div>

        <div className="space-y-10">
          <Typography className="text-3xl font-semibold tracking-wide text-center uppercase">
            You may also like
          </Typography>

          <Fade bottom cascade distance="90px">
            <div className="grid gap-10 md:gap-5 md:grid-cols-3">
              {product?.others.map((prod, idx) => {
                return (
                  <div
                    key={idx}
                    className="space-y-5 overflow-hidden rounded-lg"
                  >
                    <>
                      <img
                        src={prod.image.mobile}
                        alt=""
                        className=" md:hidden"
                      />
                      <img
                        src={prod.image.tablet}
                        alt=""
                        className="hidden md:block lg:hidden"
                      />
                      <img
                        src={prod.image.desktop}
                        alt=""
                        className="hidden lg:block"
                      />
                    </>

                    <div>
                      <Typography className="text-2xl font-semibold text-center uppercase">
                        {prod.name}
                      </Typography>
                    </div>

                    <div className="flex justify-center">
                      <PrimaryButton
                        text="see product"
                        link={`/${product?.category}/${prod.slug}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>

      <Categories />
    </Layout>
  );
};

export default productDetails;
