import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./Pages/Homepag/Homepage";
import Cart from "./customer/components/Cart/Cart";
import CheckOut from "./customer/components/CheckOut/CheckOut";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Product from "./customer/components/Products/Product";
import CustomerRouters from "./Routes/CustomerRouters";
import Admin from "./Admin/components/Admin";
import AdminRouters from "./Routes/AdminRouters";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
