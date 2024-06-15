import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <>
      <Grid container spacing={2} gap={4}>
        <Grid item xs={1} >
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 50, height: 50, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Ram</p>
              <p className="opacity-50">23 Apr 2024</p>
            </div>
          </div>
          <Rating value={3.5} name="half-rating" readOnly precision={.5}/>
          <p className="opacity-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, expedita,</p>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductReviewCard;
