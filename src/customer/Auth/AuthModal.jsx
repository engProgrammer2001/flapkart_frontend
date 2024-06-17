import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginFrom";
import { useSelector } from "react-redux";
import AdminRegisterForm from "./AdminREgistrationForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #f97316",
  boxShadow: 24,
  ourline: "none",
  p: 4,
};
const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  // console.log("auth user is : ", auth.user);
  useEffect(() => {
    if (auth.user) {
      handleClose();
      if (auth.user?.role === "ADMIN" && location.pathname === "/register/flapkart-register") {
        navigate("/admin");
      }
    }
  }, [auth.user]);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm />  : location.pathname === "/register/flapkart-register" ? <AdminRegisterForm /> : <RegisterForm />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
