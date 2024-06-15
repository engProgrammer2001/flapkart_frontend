import { TrendingUp } from "@mui/icons-material";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    state: "245k",
    title: "Sales",
    color: "#3d5afe",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    state: "12.5k",
    title: "Customers",
    color: "#4caf50",
    icon: <AccountBoxIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    state: "1.54k",
    title: "Products",
    color: "#ffc107",
    icon: <ImportantDevicesIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    state: "88k",
    title: "Revenue",
    color: "#ff4081",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} md={3} key={index}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            background: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.state}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};
const MonthlyOverview = () => {
  return (
    <div>
      <Card sx={{ backgroundColor: "#00072D", color: "white" }}>
        <CardHeader
          title="Monthly Overview"
          action={
            <IconButton size="small">
              <MoreVertIcon sx={{color:'white'}} />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box component={"span"} sx={{ fontWeight: 600 , mx:1}}>
                Total 48.5% growth😎📈
              </Box>
              This month
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              latterSpacing: ".15px !important",
              fontWeight: "bold",
            },
          }}
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStats()}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyOverview;
