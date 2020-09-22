import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  barColor: {
    background: theme.palette.primary,
  },
  border: {
    margin: "auto",
    width: "75%",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Grid container>
      <AppBar className={classes.barColor} position="static">
        <Toolbar>
          <div className={classes.border}>
            <Typography variant="button" className={classes.title}>
              <Link href="/">
                <Button color="inherit">Find Them</Button>
              </Link>
            </Typography>
            <Link href="/about">
              <Button color="inherit">About</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
