import React from "react";
import { Grid } from "@mui/material";
import "./MainContent.css";
import scrollDownIcon from "../../assets/svg/scroll-down-icon.svg";

function MainContent() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="h-full p-5 custom:active"
        id="content-box-desktop"
        style={{ height: "calc(100vh - 20rem)" }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            alignItems="left"
            justifyContent="center"
            className="p-10 m-0"
            id="content-box"
            rowGap={6}
          >
            <Grid item>
              <h1 className="text-4xl font-bold text-gray-800">
                Discover New York, One Home at a Time.
              </h1>
            </Grid>
            <Grid item className="">
              <p className="text-xl text-gray-700">
                Want to find a place to stay in Queens? We are here to help you
                find a place that suits your needs.
              </p>
            </Grid>
            <Grid item>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                Find Now
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="h-full p-5 m-0"
        id="content-box-mobile"
        style={{ height: "calc(100vh - 20rem)" }}
      >
        <Grid item xs={8} md={1}></Grid>
        <Grid item xs={14} md={10}>
          <Grid
            container
            direction="column"
            alignItems="left"
            justifyContent="center"
            className="p-10"
            id="content-box"
            rowGap={6}
          >
            <Grid item>
              <h1 className="text-4xl font-bold text-gray-800">
                Discover New York, One Home at a Time.
              </h1>
            </Grid>
            <Grid item className="">
              <p className="text-xl text-gray-700">
                Want to find a place to stay in Queens? We are here to help you
                find a place that suits your needs.
              </p>
            </Grid>
            <Grid item>
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray">
                Find Now
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} md={1}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        id="scroll-down"
        className="p-5"
      >
        <a href="#properties-section">
          <img
            src={scrollDownIcon}
            alt="scroll down icon"
            id="scroll-down-icon"
          />
        </a>
      </Grid>
    </>
  );
}

export default MainContent;
