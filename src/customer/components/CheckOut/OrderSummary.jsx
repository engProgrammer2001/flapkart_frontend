import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const {auth} = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border mb-10">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className="lg:grid grid-cols-3 relative ">
        <div className="col-span-2">
          {order.order?.orderItems?.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border px-2">
            <p className="uppercase font-bold opacity-60 mb-3">price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹ {order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Desccount</span>
                <span className="text-green-600">₹{order.order?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600"> Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹ {order.order?.totalDiscountedPrice}
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
    </div>
  );
};

export default OrderSummary;
