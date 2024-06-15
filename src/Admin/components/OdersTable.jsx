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

const OdersTable = () => {
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
  // console.log("adminOrder is : ", adminOrder);

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

  return (
    <div className="p-5">
      <Card className="mt-">
        <CardHeader
          align="center"
          className=" text-5xl text-blue-950 fonweight-bold"
          title="ALL ORDERS"
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
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Update&nbsp;
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Price&nbsp;
                </TableCell>
                {/* <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Quantity&nbsp;
                </TableCell> */}
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Delete&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
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
                          : "bg-green-900"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    {/* status menu  */}
                    <Button
                      id="basic-button"
                      // aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      // aria-expanded={open ? "true" : undefined}
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item._id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{ "aria-labelledby": "basic-button" }}
                    >
                      <MenuItem
                        onClick={() => handleConfirmedOrder(item._id)}
                       
                      >
                        Confirmed Order
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleShipedOrder(item._id)}
                        // disabled={
                        //   item.orderStatus === "DELEVERED" ||
                        //   item.orderStatus === "CONFIRMED"||
                        //   item.orderStatus === "SHIPPED" 
                        // }
                      >
                        Shipped
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleDeliverdOrder(item._id)}
                        // disabled={
                        //   item.orderStatus === "DELEVERED" ||
                        //   item.orderStatus === "SHIPPED" ||
                        //   item.orderStatus === "CONFIRMED"
                        // }
                      >
                        Delivered Order
                      </MenuItem>
                      {/* <MenuItem onClick={() => handleCancellOrder(item._id)}>
                        Cancel Order
                      </MenuItem> */}
                    </Menu>
                  </TableCell>
                  <TableCell align="center">
                    {item.totalDiscountedPrice}
                  </TableCell>
                  {/* <TableCell align="center">{item.quantity}</TableCell> */}
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteOrder(item._id)}
                    >
                      Delete
                    </Button>
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

export default OdersTable;
