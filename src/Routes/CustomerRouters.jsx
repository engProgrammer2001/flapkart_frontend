import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepag/Homepage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Products/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import CheckOut from "../customer/components/CheckOut/CheckOut";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Aboutpage from "../Pages/About/Aboutpage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
import PageNotFound from "../Pages/PageNotFound";
import LoginForm from "../customer/Auth/LoginFrom";
import RegisterForm from "../customer/Auth/RegisterForm";
import AdminRegisterForm from "../customer/Auth/AdminREgistrationForm";

const CustomerRouters = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<Homepage />} />
        {/* <Route path="/login/ashok-login" element={<LoginForm />} /> */}
        <Route path="/register" element={<Homepage />} />
        <Route path="/register/flapkart-register" element={<AdminRegisterForm />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CustomerRouters;
