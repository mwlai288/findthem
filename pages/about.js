import Layout from "../components/Layout";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    fontSize: "2rem",
    lineHeight: 1.1,
    margin: "0 auto",
    width: "75%",
  },
}));

const about = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container justify="center" sm={6}>
        <h1>About Find Them</h1>
        <main className={classes.main}>
          In the NamUs database there are registered 10,045 cases of missing
          people in the United State. This app is to bring awareness to the
          number of people missing. Search by state to see who have gone missing
          and for how long. Maybe you can help find someone.
        </main>
      </Grid>
    </Layout>
  );
};

export default about;
