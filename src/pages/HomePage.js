import React, { useEffect } from "react";
import Main from "../componenets/Main";
import SideBar from "../componenets/SideBar";

const HomePage = () => {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <SideBar />
      <Main />
    </div>
  );
};

export default HomePage;
