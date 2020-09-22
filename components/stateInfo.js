import Link from "next/link";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 7,
    textAlign: "center",
    margin: 10,
  },

  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const StateInfo = ({ record, firstname, lastname, namus2name, id, state }) => {
  const classes = useStyles();

  return (
    <>
      {record ? null : (
        <Paper elevation={10} className={classes.paper} key={id}>
          <Link
            href={`/${state}/${firstname} ${lastname}`}
            as={`${state}/${namus2name}`}
          >
            <a>
              {firstname} {lastname}
            </a>
          </Link>
        </Paper>
      )}
    </>
  );
};

export default StateInfo;
