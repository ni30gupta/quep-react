import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const btnstyle = { margin: "8px 0" };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleLogin = async () => {
    const res = await axios.post("/users/login", {
      ...state,
    });
    console.log(res.data);
    localStorage.setItem(
      "userDetails",
      JSON.stringify({ user: res.data.name, role: res.data.role })
    );
    navigate("/home");
    window.location.reload();
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (user) {
      navigate("/home");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div
        className="login"
        style={{
          height: "100vh",
          "background-color": "#2b565e",
          position: "absolute",
          width: "100vw",
        }}
      >
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center" style={{ marginBottom: "30px" }}>
              <img src="https://www.queppelin.com/wp-content/uploads/2019/08/logo.png" />

              <h3>LogIn</h3>
            </Grid>
            <TextField
              variant="standard"
              label="email"
              name="email"
              placeholder="Enter Email Id"
              fullWidth
              required
              value={state.email}
              onChange={handleChange}
            />
            <br />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              value={state.password}
              onChange={handleChange}
            />

            <div style={{ width: "60%", margin: "15px auto" }}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={handleLogin}
              >
                Sign in
              </Button>
              <Typography align="center">
                <Link href="#">Forgot password ?</Link>
              </Typography>
            </div>

            <Typography style={{ marginTop: "3rem" }}>
              {" "}
              <Link href="#">Not A Member ? Create NewAccount</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
      <div
        style={{
          position: "relative",
          // background: "red",
          top: "28rem",
          "text-align": "center",
          color: "white",
          fontSize: "0.8rem",
        }}
      >
        <p>
          Terms & Conditions Privacy Policy <br />
          copyright @2019 Vossle. All right reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
