import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
const InfoPage = () => {
  const user = useContext(userContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user.role !== "Manager") {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <h1>InfoPage</h1>
    </div>
  );
};

export default InfoPage;
