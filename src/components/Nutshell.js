import {ApplicationViews} from "./ApplicationViews";
import React, { useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register";
import NavBar from "./nav/NavBar";





export const Nutshell = () => {
    const [loggedin, setLoggedin] = useState(false);
  
    const changeState = (bool) => setLoggedin(bool);
    
    if (localStorage.getItem("NutShell_User")) {
      return (
        <>
          <NavBar />         
          <ApplicationViews />
        </>
      );
    } else {
      return (
        <Routes>
          
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="/login" element={<Login setLoggedin={changeState} />} />          
          <Route path="/register" element={<Register setLoggedin={changeState} />} />
          <Route path="/" element= {<p> word </p>} />
          <Route index element={<div>Default Page Content</div>} /> 
          
          
        </Routes>
      );
    }
  };
  