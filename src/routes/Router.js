// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/feed" element={<FeedPage />} />
  </Routes>
);

export default Router;
