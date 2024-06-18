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
import mainLogo from './WhatsApp Image 1946-03-14 at 18.22.18.jpeg';



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
        <Grid item align="center" xs={12} sm={6} md={3}>
        <img className="h-32 w-auto my-10" src={mainLogo} alt="" />
        </Grid>
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
            <Button onClick={() => navigate("/support")} className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-extrabold underline" variant="h6">
            Category
          </Typography>
          <div>
            <Button onClick={() => navigate("/product/mobile/apple")}  className="pb-5" variant="h6" gutterBottom>
              Apple
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/product/mobile/samsung")} className="pb-5" variant="h6" gutterBottom>
              Sumsung
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/product/mobile/vivo")} className="pb-5" variant="h6" gutterBottom>
              Vivo
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/product/mobile/oppo")} className="pb-5" variant="h6" gutterBottom>
              Oppo
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/product/mobile/redmi")} className="pb-5" variant="h6" gutterBottom>
              Redmi
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/product/mobile/realme")} className="pb-5" variant="h6" gutterBottom>
              Realme
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
            Shipping Policy
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
              href="#"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: "30px", color: "#E4405F" }} />
            </Link>
            <Link
              className="px-2"
              href="#"
              target="_blank"
            >
              <FacebookIcon sx={{ fontSize: "30px" }} />
            </Link>
            <Link
              className="px-2"
              href="#"
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
