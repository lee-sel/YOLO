import React from 'react';
import Main from './layouts/Main';
import Reservation from './pages/Reservation';
import { Navigate, useRoutes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    { path: "/", element: <Main /> },
    { path: "/reservation", element: <Reservation /> },
    // { path: "*", element: <Navigate to="/" /> },
  ]);
};

export default Router;