import React from "react";
import {NavLink, Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create-recipe">Create Recipe</NavLink>
      <NavLink to="/saved-recipes">Saved Recipes</NavLink>
     
      {
      !cookies.access_token ? 
      (<NavLink to="/auth">Login/Register</NavLink>)
      : 
      (<button onClick={logout}> Logout </button>)
      }
    </div>
  );
};