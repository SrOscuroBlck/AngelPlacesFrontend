import React, { useState } from "react";
import { Grid } from "@mui/material";
import { PropTypes } from "prop-types";
import "./Header.css";
import logo from "../../assets/svg/logo.svg";
import accountIcon from "../../assets/svg/account-icon.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";

function Header({ username }) {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <header className="flex justify-between items-center h-16 text-white text-xl px-10 " id="header">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className="p-4"
      >
        <Grid item>
          <a href="" className="flex">
            <img src={logo} alt="logo" className="h-10 w-10" id="logo" />
          </a>
        </Grid>
        <Grid item>
          <div className="space-x-9" id="nav-items">
            <a
              href="#home"
              className="text-white-700 hover:text-gray"
              id="nav-item"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white-700 hover:text-gray"
              id="nav-item"
            >
              About Us
            </a>
            <a
              href="#properties"
              className="text-white-700 hover:text-gray"
              id="nav-item"
            >
              Properties
            </a>
            <a
              href="#contact"
              className="text-white-700 hover:text-gray"
              id="nav-item"
            >
              Contact
            </a>
          </div>
        </Grid>
        <Grid item className="flex items-center text-white-700 hover:text-white" columnGap={3}>
          <a
            href=""
            className="flex items-center text-white-700 hover:text-white"
            id="account"
          >
            <span className="mr-2 text-xl" id="account-span">
              Hey, {username}
            </span>
            <img
              src={accountIcon}
              alt="account-icon"
              className="h-10 w-10"
              id="account-icon"
            />
          </a>
          <button className="custom:hidden" onClick={() => setSidebarVisibility(!isSidebarVisible)}>
            <img
              src={menuIcon}
              alt="menu-icon"
              className="h-10 w-10"
              id="menu-icon"
            />
          </button>
        </Grid>
      </Grid>
      {isSidebarVisible && (
        <div
          className="fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-white p-4"
          id="sidebar"
        >
          {/* Add your navigation links here */}
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#properties">Properties</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

// Set the prop types for the component set username to guest when nothing comes in

Header.propTypes = {
  username: PropTypes.string,
};

// Set the default props for the component
Header.defaultProps = {
  username: "Guest",
};

export default Header;
