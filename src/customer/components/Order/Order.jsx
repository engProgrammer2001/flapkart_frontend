import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../State/Order/Action";

const orderStatus = [
  { lable: "On the way", value: "onTheWay" },
  { lable: "Delivered", value: "delevered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((store) => store);
  console.log("Order page Order is : ", order.orders);

  
  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt]);

  return (
    <div className="px-5 lg:px-20 my-12">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} lg={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option, optionIdx) => (
                <div className=" flex items-center ">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    // htmlFor={option.value}
                  >
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={12} lg={9} >
              <Box className="space-y-5">
              {order?.orders?.length>0 && order?.orders?.map((order)=>{
                return order?.orderItems?.map((item, index)=> <OrderCard item={item} order={order} key={index}/>)
              })}
              </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
