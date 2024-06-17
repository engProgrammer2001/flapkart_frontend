import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Auth/Action";
import BackDropComponent from "../components/Backdrop/Backdrop";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData))
    console.log("userdata is : ", userData);
  };

  useEffect(() => {
    setIsLoaderOpen(true);
    setTimeout(() => {
      setIsLoaderOpen(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   if (products.loading) {
  //     setIsLoaderOpen(true);
  //   } else {
  //     setIsLoaderOpen(false);
  //   }
  // }, [products.loading]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="give-email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ padding: "0.5rem 1rem" }}
              color="warning"
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="flex py-3 items-center">
          <p>if you don't have already account ?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>
      <BackDropComponent open={isLoaderOpen} />
    </div>
  );
};

export default LoginForm;
