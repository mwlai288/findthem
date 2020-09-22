import React from "react";
import Navbar from "./Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#793131",
    height: "100vh",
    color: "#fff",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main className={classes.root}>{children}</main>
    </>
  );
};

export default Layout;
