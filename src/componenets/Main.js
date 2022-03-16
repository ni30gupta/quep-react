import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import axios from "axios";

const Main = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    role: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleLogin = async () => {
    const res = await axios.post("/users/new", {
      ...state,
    });
    console.log(res.data);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "relative",
          backgroundColor: "light-gray",
          width: "100%",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <div
          style={{ padding: "0px 5px", display: "flex", alignItems: "center" }}
        >
          <KeyboardArrowLeftIcon />
          <b>Form Submission</b>
        </div>
        <div
          style={{ padding: "0px 5px", display: "flex", alignItems: "center" }}
        >
          <b>Total Form Submitted</b>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "75%",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, lg: 1 }}>
          <Grid item lg={6}>
            <label>Name</label>
          </Grid>
          <Grid item xs={6}>
            <input
              onChange={handleChange}
              name="name"
              style={{ padding: "5px" }}
              type="text"
              placeholder="Enter Name"
            />
          </Grid>
          <Grid item lg={6}>
            <label>Email Id</label>
          </Grid>
          <Grid item xs={6}>
            <input
              onChange={handleChange}
              name="email"
              style={{ padding: "5px" }}
              type="email"
              placeholder="Assign email adresss"
            />
          </Grid>
          <Grid item lg={6}>
            <label>Password</label>
          </Grid>
          <Grid item xs={6}>
            <input
              onChange={handleChange}
              name="password"
              style={{ padding: "5px" }}
              type="text"
              placeholder="give password"
            />
          </Grid>
          <Grid item xs={6}>
            <label>Mobile No.</label>
          </Grid>
          <Grid item xs={6}>
            <input
              onChange={handleChange}
              name="mobile"
              style={{ padding: "5px" }}
              type="text"
              placeholder="Enter Mobile No."
            />
          </Grid>
          <Grid item xs={6}>
            <label>Role</label>
          </Grid>
          <Grid item xs={6}>
            <select
              onChange={handleChange}
              name="role"
              style={{ width: "100%", padding: "5px" }}
            >
              <option value="none" selected disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Manager">Manager</option>
              <option value="VP">VP</option>
              <option value="Marketing">Marketing</option>
            </select>
          </Grid>
        </Grid>
        <Button onClick={handleLogin} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Main;
