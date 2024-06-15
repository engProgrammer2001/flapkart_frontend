import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const TrignleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <div>
      <Card  sx={{ position: "relative", backgroundColor: "#00072D", color: "white"}}>
        <CardContent>
          <Typography variant="h5" sx={{ latterSpacing: ".25px", py:1, fontWeight: "bold"}}>
            FlapKart
          </Typography>
          <Typography variant="body2" sx={{fontWeight: "bold"}}>Congratulation!🥳</Typography>
          <Typography variant="h5" sx={{my:2.1}}>420.8K</Typography>
          <Button size="small" variant="contained">
            View Sales
          </Button>
          <TrignleImg src=""></TrignleImg>
          <TrophyImg src="https://image.similarpng.com/very-thumbnail/2020/08/Gold-trophy-with-the-name-plate-of-the-winner-vector-PNG.png"/>
        </CardContent>
      </Card>
    </div>
  );
};

export default Achivement;
