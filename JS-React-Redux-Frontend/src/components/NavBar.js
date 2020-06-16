import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from "../context/auth";

function Navbar(props) {
    const { setAuthTokens } = useAuth();
  
  function logOut() {
      setAuthTokens();
    }
      return (
        <div className="Navbar">
          <NavLink to="/home" exact>Home</NavLink>
          <NavLink to="/asks" exact>Your Asks</NavLink>
          <NavLink to="/offers" exact>Your Offers</NavLink>
          <NavLink to="/displaymap" exact>Asks By Address</NavLink>
          <NavLink to="/user" exact>User Info</NavLink>
          <NavLink to="/" exact onClick={logOut}>Logout</NavLink>
        </div>
      )
  }
   
  export default Navbar;