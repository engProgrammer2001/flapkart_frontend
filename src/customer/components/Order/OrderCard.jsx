import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
import { FiberManualRecord } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${order._id}`)}
      className=" mt-5 mb-5 p-5 shadow-lg hover:shadow-2xl border"
    >
      <Grid container spacing={2} justifyContent={"space-between"}>
        <Grid item xs={12} lg={6}>
          <div
            className="flex cursor-pointer object-cover object-top pt-5"
            onClick={() => navigate(`/account/order/${order._id}`)}
          >
            <img
              className="w-[8rem] h-[8rem]"
              src={item?.product?.imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="opacity-50  text-sm font-semibold">
                {item?.product?.brand}
              </p>
              <p className="text-semibold text-sm">{item?.product?.title}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={2}>
          <p className="pt-5 font-semibold">
            ₹ {item?.product?.discountedPrice}
          </p>
        </Grid>
        <Grid item xs={12} lg={4}>
          <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED"? (
             <>
             <FiberManualRecord
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered Data is After 2 Days</span>

            </>
            ):  <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery Comming Soon</span>
              </>}
            
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>
          {item.orderStatus === "DELIVERED" && (
            <div
              onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
