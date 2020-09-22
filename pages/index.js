import StateInfo from "../components/stateInfo";
import { useEffect, useState } from "react";
import Head from "next/head";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Pagination from "@material-ui/lab/Pagination";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75%",
    margin: "0 auto",
    height: "100vh",
  },
  select: {
    color: "#fff",
    "&:before": {
      borderColor: "#fff",
    },
    "&:after": {
      borderColor: "#fff",
    },
  },
  icon: {
    fill: "#fff",
  },
  label: {
    color: "#fff",
  },
}));

const Home = () => {
  const [state, setState] = useState("");
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const url = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&q=&rows=20&start=${currentPage}&refine.statedisplaynameoflastcontact=${state}`;

  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    }

    fetchData();
  }, [state, currentPage]);

  const { records } = info;
  const classes = useStyles();
  let pages = info.nhits / 20;

  return (
    <>
      <Head>
        <title>Find Them</title>
        <link rel="icon" href="/missing.png" />
      </Head>
      <Layout>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <h1>United States Missing Persons</h1>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="select-state-label" className={classes.label}>
                  Select A State
                </InputLabel>
                <Select
                  labaelid="select-state-label"
                  id="select-state"
                  autoWidth
                  value={state}
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  onChange={(e) => setState(e.target.value)}
                >
                  {states.map((state, i) => {
                    return (
                      <MenuItem value={state} key={i}>
                        {state}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            {records &&
              records.map((record) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={record.recordid}>
                  <StateInfo
                    firstname={record.fields.firstname}
                    lastname={record.fields.lastname}
                    namus2name={record.fields.namus2number}
                    id={record.recordid}
                    state={state}
                  />
                </Grid>
              ))}
            {records && records.length !== 0 ? (
              <>
                <Grid item sm={12}>
                  <h1>Total records {info.nhits}</h1>
                </Grid>
                <Grid item sm={12}>
                  <Pagination
                    variant="outlined"
                    color="primary"
                    count={Math.floor(pages)}
                    onChange={handleChange}
                    page={currentPage}
                  />
                </Grid>
              </>
            ) : null}
          </Grid>
        </div>
      </Layout>
    </>
  );
};
export default Home;
