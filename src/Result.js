import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import Button from "@material-ui/core/Button";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Expert System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function GenerateInfo(props) {
  const classes = useStyles();
  const [result, setResult] = React.useState(props.result);

  // function sayHello() {
  //   console.log("reason");
  //   return <Reason />;
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Course Advisor
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            School Fees Expert System
          </Typography>
          &nbsp;
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Recommended Courses
            </Typography>
            &nbsp;
            {result == undefined ? (
              <div>
                <Typography variant="subtitle1">
                  Sorry, you do not fulfil the requirement.If your grade above
                  3.0, perhaps your input is wrong. Please retest it.
                </Typography>
                &nbsp;
                <Typography variant="subtitle1">
                  If your grade is below 3.0, we suggest you to enroll
                  Polytechnic, Diploma or Foundation.
                </Typography>
              </div>
            ) : (
              <List
                component="nav"
                className={classes.root}
                aria-label="mailbox folders"
              >
                {result.map((value, index) => {
                  return (
                    <ListItem key={index}>
                      {" "}
                      <ListItemIcon>
                        <WorkOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary={value} />
                    </ListItem>
                  );
                })}
              </List>
            )}
            <div className={classes.buttons}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={() => {
                  window.location.reload();
                }}
              >
                ReTest
              </Button>
            </div>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
