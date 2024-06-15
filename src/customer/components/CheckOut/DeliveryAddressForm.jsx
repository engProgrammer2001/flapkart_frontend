import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = ({ handleNext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  console.log("auth is : ", auth);
  const jwt = localStorage.getItem("jwt");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    dispatch(createOrder({ address, jwt, navigate }));
    handleNext();
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log("data is : ",data);

  //   const address = {
  //     firstName: data.get("firstName"),
  //     lastName: data.get("lastName"),
  //     streetAddress: data.get("address"),
  //     city: data.get("city"),
  //     state: data.get("state"),
  //     zipCode: data.get("zip"),
  //     mobile: data.get("phoneNumber"),
  //   };

  //   const orderData = { address, navigate };
  //   dispatch(createOrder(orderData));
  //   // // after perfoming all the opration
  //   // handleNext();
  // };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address: item, jwt, navigate }));
    handleNext();
  };

  // return (
  //   <div>
  //     <Grid container spacing={4} className="py-10">
  //       <Grid
  //         xs={12}
  //         lg={5}
  //         className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
  //       >
  //         <div className="p-5 py-7 border-b cursor-pointer">
  //           {auth.user?.addresses.map((item) => (
  //             <AddressCard address={item} />
  //           ))}
  //           <Button
  //             sx={{ mt: 2 }}
  //             color="secondary"
  //             size="large"
  //             variant="contained"
  //           >
  //             Deliver Here
  //           </Button>
  //         </div>
  //       </Grid>
  //       <Grid item xs={12} lg={7}>
  //         <Box className="border rounded-s-md shadow-md p-5">
  //           <form onSubmit={handleSubmit}>
  //             <Grid container spacing={3}>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   id="firstName"
  //                   name="firstName"
  //                   label="First Name"
  //                   fullWidth
  //                   autoComplete="given-name"
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   id="lastName"
  //                   name="lastName"
  //                   label="Last Name"
  //                   fullWidth
  //                   autoComplete="given-name"
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   required
  //                   id="Address"
  //                   name="Address"
  //                   label="Address"
  //                   fullWidth
  //                   autoComplete="given-name"
  //                   multiline
  //                   rows={6}
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   id="City"
  //                   name="City"
  //                   label="City"
  //                   fullWidth
  //                   autoComplete="given-name"
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   id="State"
  //                   name="State"
  //                   label="State/Province/Region"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   id="Zipcode"
  //                   name="Zipcode"
  //                   label="Zip Code"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   id="PhoneNumber"
  //                   name="PhoneNumber"
  //                   label="Phone Number"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Button
  //                   sx={{ mt: 2, py: 1.5 }}
  //                   color="secondary"
  //                   size="large"
  //                   variant="contained"
  //                   type="submit"
  //                 >
  //                   Deliver Here
  //                 </Button>
  //               </Grid>
  //             </Grid>
  //           </form>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </div>
  // );

  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          {auth.user?.addresses.map((item) => (
            <div
              onClick={() => setSelectedAdress(item)}
              className="p-5 py-7 border-b cursor-pointer"
            >
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => handleCreateOrder(item)}
                >
                  Deliverd Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid> */}
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  type="text"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  type="text"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  type="number"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DeliveryAddressForm;
