import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PaymentsIcon from '@mui/icons-material/Payments';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';


const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        className="bg-blue-950 text-white text-center mt-5"
        container
        sx={{ bgcolor: "bg-blue-950", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div className="border-r-2 border-gray-500 py-4">
            <DeliveryDiningIcon sx={{ fontSize: "90px", color:'#FFBF00' }} />
            <h6>Free Shipping</h6>
            <p>Get you Placed order within 24 Hours.</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="border-r-2 border-gray-500 py-4">
            <PsychologyAltIcon sx={{ fontSize: "90px", color:'#FFBF00'  }} />
            <h6>24/7 Support.</h6>
            <p>we are here for your 24/7 support</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="border-r-2 border-gray-500 py-4">
            <PaymentsIcon sx={{ fontSize: "90px", color:'#FFBF00'  }} />
            <h6>Online Payment.</h6>
            <p>we are ecceping COD,UPI options are available.</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="py-4">
            <AssignmentReturnedIcon sx={{ fontSize: "90px", color:'#FFBF00'  }} />
            <h6>Return policy</h6>
            <p>We have a Easy free Return Policy.</p>
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid
        className="bg-blue-950 text-white text-center"
        container
        sx={{ bgcolor: "bg-blue-950", color: "white", py: 6 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Company
          </Typography>
          <div>
            <Button onClick={() => navigate("/about")} className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/contact")} className="pb-5" variant="h6" gutterBottom>
              Contact Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Dcumentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Legal
          </Typography>
          <div>
            <Button onClick={() => navigate("/privacy")} className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Services
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        className="bg-blue-950 text-white text-center"
        container
        sx={{ bgcolor: "bg-blue-950", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Payment System
          </Typography>
          <div>
            <img
              className="m-auto"
              src="https://www.zeenkart.com/wp-content/uploads/2021/09/payment.png"
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Shipping System:
          </Typography>
          <div>
            <Link href="#">
              <img
                className="m-auto"
                src="https://www.zeenkart.com/wp-content/uploads/2021/09/shipping.png"
                alt=""
              />
            </Link>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Social Links :
          </Typography>
          <div>
            <Link
              className="px-2"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: "30px", color: "#E4405F" }} />
            </Link>
            <Link
              className="px-2"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FacebookIcon sx={{ fontSize: "30px" }} />
            </Link>
            <Link
              className="px-2"
              href="https://www.linkedin.com/in/ashok-kumar-kushwaha-1305b5224/"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: "30px" }} />
            </Link>
            <Link className="px-2">
              <TwitterIcon sx={{ fontSize: "30px", color: "#1DA1F2", cursor:'pointer'}} />
            </Link>
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid
        className="bg-blue-950 text-white text-center"
        container
        sx={{ bgcolor: "bg-blue-950", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <p>2024-25 &copy; Developed By || <a className="text-yellow-400" href="https://webalphatech.com/" target="_blank">Web Alpha Technosoft. </a> All right reserved</p>
        </Grid>
      </Grid>
    </>
  );
};


export default Footer;
