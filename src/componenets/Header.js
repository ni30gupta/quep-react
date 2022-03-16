import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function Header({ localS }) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(localS);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/login");
    window.location.reload();
  };
  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ "background-color": "#234c54" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="https://www.queppelin.com/wp-content/uploads/2019/08/logo.png" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user && "Welcome " + user?.user}
          </Typography>
          {user ? (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
