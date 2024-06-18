import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";
import { addItemToCart, getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  return (
    <>
      <div className="lg:grid grid-cols-3 lg:px-16 relative ">
        <div className="col-span-2">
          {cart && cart?.cartItems && cart?.cartItems.length > 0 ? (
            cart?.cartItems.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          ) : (
            <h1 className="text-center text-blue-950 text-2xl lg:text-5xl pt-5">No items in the cart</h1>
          )}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border px-2">
            <p className="uppercase font-bold opacity-60 mb-3">price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Total Items</span>
                <span>{cart && cart.cart?.totalItem}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart && cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">
                  -₹{cart && cart.cart?.discounte}
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600"> Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart && cart.cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>

            <Button
              onClick={handleCheckOut}
              color="warning"
              variant="contained"
              className="w-full"
              xs={{ px: "2.7rem", py: "0.7rem", fontWeight: "bold" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
