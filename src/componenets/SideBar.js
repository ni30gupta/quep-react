import React from "react";
import { Link } from "react-router-dom";
import Menu from "../componenets/Menu";

const SideBar = () => {
  const { role } = JSON.parse(localStorage.getItem("userDetails"));
  // const role = "Admin";
  return (
    <div
      style={{
        width: "18vw",
        backgroundColor: "#2b565e",
        position: "relative",
        height: "100vh",
      }}
    >
      {/* <li> */}

      <Link to="/home">
        <Menu item="Home" />
      </Link>

      {role === "Admin" && (
        <Link to="/users">
          <Menu item="User" />
        </Link>
      )}

//       {role === "Admin" ||
//         (role === "User" && (
//           <Link to="/users">
//             <Menu item="User" />
//           </Link>
//         ))}

     {role === "Manager" && (
        <Link to="/info">
          <Menu item="Info" />
        </Link>
      )}

      {(role === "VP" || role === "Marketing" || role === "Admin") && (
        <Link to="/report">
          <Menu item="report" />
        </Link>
      )}
    </div>
  );
};

export default SideBar;
