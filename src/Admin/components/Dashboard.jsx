import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../view/OrderTableView";
import ProductTableView from "../view/ProductTableView";
import Graf from "./Graf";

const Dashboard = () => {
  return (
    <div className="p-8 bg-slate-800">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-500">
            <Achivement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-500">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <OrderTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <ProductTableView/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
