import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateTweetComponent from "../components/CreateTweetComponent";
import NavBarComponent from "../components/NavBarComponent";
import UserComponent from "../components/UserComponent";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarComponent />}>
          <Route path="/" element={<CreateTweetComponent />} />
          <Route path="/user" element={<UserComponent />} />
        </Route>
        <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
