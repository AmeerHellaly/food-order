import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFood from "../pages/AllFood";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Chsckout from "../pages/Chsckout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
 export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/foods" element={<AllFood />}></Route>
      <Route path="/foods/:id" element={<FoodDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Chsckout />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      
    </Routes>
  );
};

 