import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");

  const handleNext = () => {
    let newSkipped = skipped;
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleBack = () => {};

  // return (
  //   <div className=" pt-10 lg:px-20">
  //     <Box sx={{ width: "100%" }}>
  //       <Stepper activeStep={step}>
  //         {steps.map((label, index) => {
  //           const stepProps = {};
  //           const labelProps = {};

  //           return (
  //             <Step key={label} {...stepProps}>
  //               <StepLabel {...labelProps}>{label}</StepLabel>
  //             </Step>
  //           );
  //         })}
  //       </Stepper>
  //       {activeStep === steps.length ? (
  //         <React.Fragment>
  //           <Typography sx={{ mt: 2, mb: 1 }}>
  //             All steps completed - you&apos;re finished
  //           </Typography>
  //         </React.Fragment>
  //       ) : (
  //         <React.Fragment>
  //           {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
  //           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
  //             <Button
  //               color="inherit"
  //               disabled={activeStep === 0}
  //               onClick={handleBack}
  //               sx={{ mr: 1 }}
  //             >
  //               Back
  //             </Button>
  //           </Box>

  //           <div className="mt-10">
  //             {step == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
  //           </div>
  //         </React.Fragment>
  //       )}
  //     </Box>
  //   </div>
  // );

  return (
    <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={step == 2}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            
          </Box>
          {/* <Typography sx={{ my: 6 }}>Title</Typography> */}

          <div className="my-5">
            {step == 2? <DeliveryAddressForm handleNext={handleNext} />:<OrderSummary/>}
          </div>

          {/* <AddDeliveryAddressForm handleNext={handleNext} /> */}

          
        </React.Fragment>
      )}
    </Box>
  );


}
