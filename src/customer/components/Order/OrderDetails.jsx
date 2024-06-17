import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById, getOrderHistory } from "../../../State/Order/Action";
import { useNavigate, useParams } from "react-router-dom";
import BackDropComponent from "../Backdrop/Backdrop";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const orderId = useParams();
  const navigate = useNavigate();
  const { order } = useSelector((store) => store);

  // console.log("order Details page order is : ", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId.orderId));
  },[]);


  return (
    <>
      {!order.loading && (
        <div className=" px-2 lg:px-36 space-y-7 ">
          <Grid container className="p-3 shadow-lg">
            <Grid xs={12}>
              <p className="font-bold text-lg py-2">Delivery Address</p>
            </Grid>
            <Grid item xs={6}>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
          <Box className="p-5 shadow-lg border rounded-md">
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item xs={9}>
                <OrderTraker
                  activeStep={
                    order.order?.orderStatus === "PLACED"
                      ? 1
                      : order.order?.orderStatus === "CONFIRMED"
                      ? 2
                      : order.order?.orderStatus === "SHIPPED"
                      ? 3
                      : 5
                  }
                />
              </Grid>
              <Grid item>
                {order.order?.orderStatus === "DELIVERED" && (
                  <Button sx={{ color: "" }} color="error" variant="text">
                    RETURN
                  </Button>
                )}

                {order.order?.orderStatus !== "DELIVERED" && (
                  <Button sx={{ color: deepPurple[500] }} variant="text">
                    cancel order
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box>

          <Grid container className="space-y-5">
            {order?.order?.orderItems?.map((item) => (
              <Grid
                container
                item
                className="shadow-xl rounded-md p-5 border"
                sx={{ alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}
              >
                <Grid item xs={12} lg={6}>
                  {" "}
                  <div className="flex  items-center ">
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src={item?.product.imageUrl}
                      alt=""
                    />
                    <div className="ml-5 space-y-2">
                      <p className="">{item.product.title}</p>
                      <p className="opacity-50 text-xs font-semibold space-x-5">
                        <span>Color: {item?.product?.color}</span>
                      </p>
                      <p>Seller: {item.product.brand}</p>
                      <p className=" text-sm font-semibold space-x-5">
                      <span>₹{item.discountedPrice} </span>
                      
                      <span className="line-through opacity-50">₹{item.price} </span>
                      </p>
                      
                    </div>
                  </div>
                </Grid>
                <Grid item sx={{marginTop: "1rem"}}>
                  {
                    <Box
                      sx={{ color: deepPurple[500] }}
                      // onClick={() =>
                      //   navigate(`/account/rate/${item.product._id}`)
                      // }
                      className="flex items-center cursor-pointer"
                    >
                      <StarIcon
                        sx={{ fontSize: "2rem" }}
                        className="px-2 text-5xl"
                      />
                      <span>Rate & Review Product</span>
                    </Box>
                  }
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      <BackDropComponent open={order.loading} />
    </>
  );
};

export default OrderDetails;
