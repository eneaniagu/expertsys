import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PersonalInfo from "./component/PersonalInfo.js";
import AcademicInfo from "./component/AcademicInfo.js";
import PersonalityInfo from "./component/PersonalityInfo.js";

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

const steps = [
  "Personal Information",
  "Academic Background",
  "Personality Traits",
];

export default function GenerateInfo(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    stream: "",
    grade: "",
    interested: [],
    personality: [],
  });

  const [result, setResult] = React.useState({
    recommendCourse: [],
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCallBack = (info) => {
    console.log("info", info);
    //do logic
    // console.log(generateRuleBasedResult(info));
    let result = generateRuleBasedResult(info);
    props.callBack2(result);

    setData(info);
    return JSON.stringify(info);
  };

  const generateRuleBasedResult = (info) => {
    if (info.grade === + "3.0 - 3.5" || info.grade === "3.5 and above") {
      // condition 1
      if (info.interested.includes("Business")) {
        // rule 1
        if (
          info.personality.includes(
            "Introverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          // var course = "Accounting, Finance, Business Statistics";
          // setResult(course);
          console.log("Accounting, Finance, Business Statistics");
          return ["Accounting", "Finance", "Business Statistics"];
        }
        //rule 2
        else if (
          info.personality.includes(
            "Extroverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          // var course = " Business Statistics";
          // setResult(course);
          console.log(
            " Business Administration,  Marketing, Business Management  "
          );
          return [
            " Business Administration",
            "Marketing",
            "Business Management  ",
          ];
        }
      }
      // condition 2
      if (info.interested.includes("Technical")) {
        if (
          info.personality.includes(
            "Extroverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Computer Science, Business Informatics, Multimedia");
          return ["Computer Science", "Business Informatics", "Multimedia"];
        } else if (
          info.personality.includes(
            "Introverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log(
            "Electrical Engineering, Mechanical Engineering, Chemical Engineering"
          );
          return [
            "Electrical Engineering",
            "Mechanical Engineering",
            "Chemical Engineering",
          ];
        }
      }
      // condition 3
      if (info.interested.includes("Art")) {
        if (
          info.personality.includes(
            "Extroverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Language and Linguistics, Psychology, Arts and Music");
          return ["Language and Linguistics", "Psychology", "Arts and Music"];
        } else if (
          info.personality.includes(
            "Introverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Art History, Geography, Arts Southeast Asian Studies");
          return ["Art History", "Geography", "Arts Southeast Asian Studies"];
        }
      }
      // condition 4
      if (info.interested.includes("Computing")) {
        if (
          info.personality.includes(
            "Extroverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Computer Science, Business Informatics, Multimedia");
          return ["Computer Science", "Business Informatics", "Multimedia"];
        } else if (
          info.personality.includes(
            "Introverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Networking, Software Engineering, Data Science");
          return ["Networking", "Software Engineering", " Data Science"];
        }
      }
    }
    if (info.grade === "3.5 and above" && info.stream === "Science") {
      // condition 1
      if (info.interested.includes("Medical")) {
        if (
          info.personality.includes(
            "Introverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Biomedical Sciecne, Medical Biology, Physiology");
          return ["Biomedical Sciecne", "Medical Biology", "Physiology"];
        } else if (
          info.personality.includes(
            "Extroverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Dentistry, Medicine, Pharmacology");
          return ["Dentistry", "Medicine", "Pharmacology"];
        }
      }
      // condition 2
      else if (info.interested.includes("HealthScience")) {
        if (
          info.personality.includes(
            "Introverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log(
            "Science in Biotechnology, Science in Biohealth Science , Science in Bioinformatics"
          );
          return [
            "Science in Biotechnology",
            "Science in Biohealth Science",
            "Science in Bioinformatics",
          ];
        } else if (
          info.personality.includes(
            "Extroverts",
            "Sensors",
            "Thinkers",
            "Judgers"
          )
        ) {
          console.log("Counselling, Early Children Education, Nursing");
          return ["Counselling", "Early Children Education", "Nursing"];
        }
      }
    }
  };

  const handleResult = () => {
    props.callBack(true);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo callback={handleCallBack} data={data} />;
      case 1:
        return <AcademicInfo callback={handleCallBack} data={data} />;
      case 2:
        return <PersonalityInfo callback={handleCallBack} data={data} />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Expert System
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            School Fees Expert System
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your submission.
                </Typography>
                <Typography variant="subtitle1">
                  Your result is being generated. You can click the button below
                  to view your result.
                </Typography>
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={handleResult}
                >
                  View Result
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Submit Info" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
