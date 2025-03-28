// import React from 'react'

import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from "./CartItems";

const CartPage = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        {/* Left Part & Products Section */}
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">5 </span>
                Products in your cart
              </p>
            </div>
            <CartItems size="S" qty="1" />
            <CartItems size="M" qty="1" />
            <CartItems size="L" qty="1" />
            <CartItems size="XL" qty="1" />
            <CartItems size="XXL" qty="1" />
          </div>
        </div>

        {/* Right Part & Cart Summary */}
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Summary</h3>
            <hr />
            {/* Subtotal */}
            <p className="flex items-center justify-between">
              <span className=" text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">₹2939/-</span>
            </p>
            {/* Shipping */}
            <p className="flex items-center justify-between">
              <span className=" text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            {/* Estimate */}
            <p className="flex items-center justify-between">
              <span className=" text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">India</span>
            </p>
            {/* Total */}
            <p className="flex items-center justify-between">
              <span className=" text-[14px] font-[500]">Total</span>
              <span className="text-primary font-bold">₹11996/-</span>
            </p>
            <br />
            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsFillBagCheckFill className="text-[20px]" /> Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
