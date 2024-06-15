import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    // console.log("update data ",data)
    dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item?._id, jwt));
  };
  return (
    <>
      <div className="mb-10 p-2 shadow-lg border rounded-md">
        <div className="flex item-center">
          <div className="w-[15rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
              className="w-full h-full object-cover object-top"
              src={item?.product?.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-5 space-y-1 ">
            <p className="font-semibold ">{item?.product?.brand}</p>
            <p className="font-semibold opacity-50">{item?.product?.title} </p>
            <div className="flex space-x-5 items-center text-lg  text-gray-900 mt-6 lg:pt-6 ">
              <p className="font-semibold">
                ₹ {item?.product?.discountedPrice}
              </p>
              <p className="opacity-60 line-through">
                ₹ {item?.product?.price}
              </p>
              <p className="text-green-600 font-semibold">
                {item?.product?.discountPersent}% off
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">
              {item?.quantity}
            </span>
            <IconButton onClick={() => handleUpdateCartItem(1)}>
              <AddCircleOutlineIcon color="secondary" />
            </IconButton>
          </div>
          <Button
            onClick={handleRemoveCartItem}
            className="opacity-90"
            sx={{ color: "#9c27b0", fontWeight: "bold" }}
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
