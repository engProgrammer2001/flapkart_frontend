import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import InboxIcon from "@mui/icons-material/Inbox";
// import EmailIcon from "@mui/icons-material/Email";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Products from "@mui/icons-material/ProductionQuantityLimits";
import Customers from "@mui/icons-material/SupportAgent";
import Order from "@mui/icons-material/BookmarkBorder";
import AddProduct from "@mui/icons-material/NoteAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./Dashboard";
import CreateProductForm from "./CreateProductForm";
import ProductTable from "./ProductTable";
import OdersTable from "./OdersTable";
import CustomersTable from "./CustomersTable";
import UpdateIcon from '@mui/icons-material/Update';
import UpdateProductForm from "./UpdateProduct";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon sx={{ color: "white"}} /> },
  { name: "Products", path: "/admin/products", icon: <Products sx={{ color: "white"}}  /> },
  { name: "Customers", path: "/admin/customers", icon: <Customers sx={{ color: "white"}}  /> },
  { name: "Orders", path: "/admin/orders", icon: <Order sx={{ color: "white"}}  /> },
  { name: "AddProduct", path: "/admin/products/creates", icon: <AddProduct sx={{ color: "white"}}  /> },
  // { name: "UpdateProduct", path: "/admin/products/update", icon: <UpdateIcon/> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();



  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };


  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        border:"1px solid gray",
        color: "white",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <>
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />} */}
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <p className="text-white font-bold">{item.name}</p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      {/* use account List  */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: "white"}}  />
            </ListItemIcon>
            <ListItemText>
              <p className="text-white font-bold">Account</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="flex h-full">
        <CssBaseline />
        {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}
        <div className="w-[15%] lg:fixed lg:top-0 bg-slate-800 text-white">{drawer}</div>
        <div className="w-[100%] lg:ml-[15%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products/creates" element={<CreateProductForm />} />
            <Route path="/products/update/:productId" element={<UpdateProductForm />} />
            <Route path="/products" element={<ProductTable />} />
            <Route path="/orders" element={<OdersTable />} />
            <Route path="/customers" element={<CustomersTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
