import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../State/Auth/Action";
import "./UserProfile.css";
import { deepPurple } from "@mui/material/colors";

const UserProfile = () => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  //   console.log("user is____ : ", user);

  useEffect(() => {
    // console.log("jwt is : ", jwt);
    dispatch(getUser(jwt));
  }, [jwt]);

  return (
    <>
      <h1 className="text-3xl font-bold my-10 text-center text-blue-950 underline">USER PROFILE</h1>
      <div className="profile-container">
        <Box className="profile-header shadow-lg">
          {/* <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" /> */}
          <Avatar
            className="text-white my-8"
            sx={{ width: 100, height: 100, fontSize: 50, bgcolor: deepPurple[500] }}
          >
            {user?.firstName[0].toUpperCase()}
          </Avatar>
          <Typography variant="h4" component="div" className="user-name">
            {user?.firstName.toUpperCase() + " " + user?.lastName.toUpperCase()}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            className="user-title"
          >
            {user?.role}
          </Typography>
        </Box>
        <Box className="profile-details">
          <div className="detail-item">
            <span className="material-icons">ID: </span>
            <span className="detail-text">{user?._id}</span>
          </div>
          <div className="detail-item">
            <span className="material-icons">Email : </span>
            <span className="detail-text">{user?.email}</span>
          </div>
          <div className="detail-item">
            <span className="material-icons">First Name : </span>
            <span className="detail-text">{user?.firstName}</span>
          </div>
          <div className="detail-item">
            <span className="material-icons">Last Name : </span>
            <span className="detail-text">{user?.lastName}</span>
          </div>
          <div className="detail-item">
            <span className="material-icons">Role : </span>
            <span className="detail-text">{user?.role}</span>
          </div>
          <div className="detail-item">
            <span className="material-icons">Address : </span>
            <span className="detail-text">{user?.addresses}</span>
          </div>
          <div className="detail-item">
            <span className="material-icons">Payment Information : </span>
            <span className="detail-text">{user?.paymentInformation}</span>
          </div>
        </Box>
      </div>
    </>
  );
};

export default UserProfile;
