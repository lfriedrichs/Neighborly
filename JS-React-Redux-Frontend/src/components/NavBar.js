import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
      return (
        <div className="Navbar">
          <NavLink to="/home" exact>Home</NavLink>
          <NavLink to="/asks" exact>Your Asks</NavLink>
          <NavLink to="/offers" exact>Your Offers</NavLink>
          <NavLink to="/displaymap" exact>Asks By Address</NavLink>
          <NavLink to="/user" exact>User Info</NavLink>
          <NavLink to="/" exact >Logout</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;