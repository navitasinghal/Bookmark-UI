import React from "react";
import {
  Grid,
  AppBar,
  InputBase,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Bookmark from "./Bookmark";

const handleClickOpen = () => {
  console.log("hello world");
};

function Home() {
  return (
    <React.Fragment>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography className="title" variant="h6" noWrap>
            Bookmark Management
          </Typography>
          <div className="grow" />
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              //   classes={{
              //     root: inputRoot,
              //     input: inputInput,
              //   }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className="sectionDesktop">
            <Button style={{ color: "black" }} variant="contained">
              Contact Us
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="container">
        <div className="main">
          <Bookmark />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
