import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTableView = () => {
  // this is status menu
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmOrder,
    adminOrder.deliveredOrder,
    adminOrder.shipOrder,
    adminOrder.deleteOrder,
    adminOrder.cancelOrder,
  ]);
  console.log("adminOrder is : ", adminOrder);

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };
  const handleDeliverdOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  const handleCancellOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
    handleClose();
  };

  return (
    <div className="p-5">
      <Card className="mt-">
        <CardHeader
          align="center"
          className=" text-5xl text-blue-950 fonweight-bold"
          title="RECENT ORDERS"
        />
        <TableContainer component={Paper} sx={{}}>
          <Table
            sx={{ minWidth: 650, backgroundColor: "#dfe6e9" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                >
                  Images
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Title
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Status&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.slice(0,5).map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" scope="row">
                    <AvatarGroup>
                      {item.orderItems?.map((orderItem) => (
                        <Avatar src={orderItem.product?.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="center">
                    {item.orderItems?.map((orderItem) => (
                      <p>{orderItem.product?.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="center">
                    <span
                      className={`text-white px-2 py-1 rounded-xl ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-green-500"
                          : item.orderStatus === "PENDING"
                          ? "bg-yellow-500"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-blue-500"
                          : item.orderStatus === "PLACED"
                          ? "bg-gray-500"
                          : item.orderStatus === "CANCELLED"
                          ? "bg-red-600"
                          : "bg-green-900"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
