import Head from "next/head";

// Material-UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    // height: "30rem",
    width: 345,
    margin: "auto",
  },
  card: {
    padding: "5rem",
  },
}));

const Person = ({ data, image }) => {
  const { records } = data;
  const { images } = image;
  const fullName = `${records[0].fields.firstname} ${records[0].fields.lastname}`;
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Find Me | {fullName}</title>
      </Head>
      <Layout>
        {records && images && (
          <Grid container justify="center" className={classes.card}>
            <Grid item xs={6}>
              <Card>
                <CardActionArea>
                  {images[0] ? (
                    <CardMedia>
                      <img
                        className={classes.image}
                        src={`https://www.namus.gov/${images[0].files.original.href}`}
                      />
                    </CardMedia>
                  ) : (
                    <div> No Image Available</div>
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {fullName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                    >
                      <div>
                        Last seen in:{" "}
                        <span>{records[0].fields.cityoflastcontact} </span>
                      </div>
                      <div>
                        Date last seen:{" "}
                        <span>{records[0].fields.dateoflastcontact} </span>
                      </div>
                      <div>
                        Age when last seen:{" "}
                        <span>{records[0].fields.computedmissingmaxage} </span>
                      </div>
                      <div>
                        Race/Ethnicity:{" "}
                        <span>{records[0].fields.raceethnicity} </span>
                      </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary">
                    <a href={records[0].fields.link} target="__blank">
                      <p>View case information</p>
                    </a>
                  </Button>
                  <Button size="small" color="secondary">
                    <Link href="/">
                      <p>Home</p>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
      </Layout>
    </>
  );
};

export default Person;

export const getServerSideProps = async ({ query }) => {
  const person = query.person;

  try {
    const res = await fetch(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&q=${person}`
    );
    const data = await res.json();
    const res2 = await fetch(
      `https://www.namus.gov/api/CaseSets/NamUs/MissingPersons/Cases/${person}`
    );
    const image = await res2.json();
    return {
      props: {
        data,
        image,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
