import React from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const ReportPage = () => {
  const user = React.useContext(userContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.role === "User" || user.role === "Manager") {
      navigate("/home");
    }
  }, []);

  
  return (
    <div>
      <h1>ReportPage</h1>
    </div>
  );
};

export default ReportPage;
