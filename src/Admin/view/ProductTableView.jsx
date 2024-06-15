import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductTableView = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const ProductData = products.productsnew.content;
  console.log("productData is : ", ProductData);


  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 123456789123456,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  
  return (
    <div className="p-5">
      <Card className="mt-">
        <CardHeader align="center" className=" text-5xl text-blue-950 fonweight-bold" title="RECENT PRODUCTS" />
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
                  Category&nbsp;
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
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#00072D",
                  }}
                  align="center"
                >
                  Quantity&nbsp;
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {ProductData?.slice(0,5).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" scope="row">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.category.name}</TableCell>
                  <TableCell align="center">{item.discountedPrice}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="center">
                   
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

export default ProductTableView;
