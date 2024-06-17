import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";
import BackDropComponent from "../components/Backdrop/Backdrop";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // console.log("handle submit data is : ", data);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      role: data.get("role"),
    };
    dispatch(register(userData));
  };

  const [role, setRole] = React.useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      {!auth.loading && (
        <div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  autoComplete="give-name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="give-name"
                />
              </Grid>
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
                <FormControl fullWidth required>
                  <InputLabel id="role">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="role"
                    value={role}
                    onChange={handleRoleChange}
                    label="Role"
                    autoComplete="give-role"
                  >
                    <MenuItem value="">
                      <em>Select Role</em>
                    </MenuItem>
                    <MenuItem value="CUSTOMER">CUSTOMER</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  sx={{ padding: "0.5rem 1rem" }}
                  color="warning"
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>

          <div className="flex justify-center flex-col items-center">
            <div className="flex py-3 items-center">
              <p>if you have already account ?</p>
              <Button
                onClick={() => navigate("/login")}
                className="ml-5"
                size="small"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
      <BackDropComponent open={auth.loading} />
    </>
  );
};

export default RegisterForm;
