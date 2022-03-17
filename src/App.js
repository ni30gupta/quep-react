import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componenets/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import InfoPage from "./pages/InfoPage";
import ReportPage from "./pages/ReportPage";
import UserPage from "./pages/UserPage";
import axios from "axios";
import { PrivateRoutes } from "./PrivateRoutes";
import PageNotFound from "./pages/PageNotFound";

// axios.defaults.baseURL = "http://localhost:5000/"; //
axios.defaults.baseURL = "https://quepplin.herokuapp.com/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.defaults.withCredentials = true;

export const userContext = createContext();
const App = () => {
  const localS = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={localS}>
          <Header localS={localS} />
          <Routes>
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/report" element={<ReportPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
