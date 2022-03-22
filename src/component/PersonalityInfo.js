import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function PersonalTraitForm(props) {
  const [interested, setInterested] = React.useState({
    Technical: false,
    Business: false,
    Art: false,
    Computing: false,
    Medical: false,
    HealthScience: false,
  });

  const [personality, setPersonality] = React.useState({
    Introverts: false,
    Extroverts: false,
    Sensors: false,
    Intuitives: false,
    Thinkers: false,
    Feelers: false,
    Judgers: false,
    Perceivers: false,
  });

  // const [reg, setreg] = React.useState(props.data.age);

  const handleInterested = (event) => {
    setInterested({ ...interested, [event.target.name]: event.target.checked });
  };

  const handlePersonality = (event) => {
    setPersonality({
      ...personality,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    let obj = {
      ...props.data,
      interested: Object.keys(interested).filter((item) => {
        return interested[item] && item;
      }),
      personality: Object.keys(personality).filter((item) => {
        return personality[item] && item;
      }),
    };
    props.callback(obj);
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Trait & Hobbies
      </Typography>
      <Grid container spacing={3} direction="column">
        <Grid item xs={3}>
          <FormLabel component="legend">Interested Field</FormLabel>
        </Grid>
        <FormGroup row>
          <FormControlLabel
            control={
              <GreenCheckbox
                disabled={
                  interested.HealthScience ||
                  interested.Medical ||
                  interested.Business ||
                  interested.Art ||
                  interested.Computing
                }
                checked={interested.Technical}
                onChange={handleInterested}
                name="Technical"
              />
            }
            label="Technical"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                disabled={
                  interested.HealthScience ||
                  interested.Medical ||
                  interested.Technical ||
                  interested.Art ||
                  interested.Computing
                }
                checked={interested.Business}
                onChange={handleInterested}
                name="Business"
              />
            }
            label="Business"
          />

          <FormControlLabel
            control={
              <GreenCheckbox
                disabled={
                  interested.HealthScience ||
                  interested.Medical ||
                  interested.Business ||
                  interested.Technical ||
                  interested.Computing
                }
                checked={interested.Art}
                onChange={handleInterested}
                name="Art"
              />
            }
            label="Art & Humanities"
          />

          <FormControlLabel
            control={
              <GreenCheckbox
                disabled={
                  interested.HealthScience ||
                  interested.Medical ||
                  interested.Business ||
                  interested.Art ||
                  interested.Technical
                }
                checked={interested.Computing}
                onChange={handleInterested}
                name="Computing"
              />
            }
            label="Computing & IT"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                disabled={
                  interested.HealthScience ||
                  interested.Technical ||
                  interested.Business ||
                  interested.Art ||
                  interested.Computing
                }
                checked={interested.Medical}
                onChange={handleInterested}
                name="Medical"
              />
            }
            label="Medical"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                disabled={
                  interested.Technical ||
                  interested.Medical ||
                  interested.Business ||
                  interested.Art ||
                  interested.Computing
                }
                checked={interested.HealthScience}
                onChange={handleInterested}
                name="HealthScience"
              />
            }
            label="Health Science"
          />
        </FormGroup>
        &nbsp;&nbsp;
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Personality Trait</FormLabel>
          </FormControl>
        </Grid>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Extroverts}
                checked={personality.Introverts}
                onChange={handlePersonality}
                name="Introverts"
              />
            }
            label="Introverts"
          />
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Introverts}
                checked={personality.Extroverts}
                onChange={handlePersonality}
                name="Extroverts"
              />
            }
            label="Extroverts"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Intuitives}
                checked={personality.Sensors}
                onChange={handlePersonality}
                name="Sensors"
              />
            }
            label="Sensors"
          />
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Sensors}
                checked={personality.Intuitives}
                onChange={handlePersonality}
                name="Intuitives"
              />
            }
            label="Intuitives"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Feelers}
                checked={personality.Thinkers}
                onChange={handlePersonality}
                name="Thinkers"
              />
            }
            label="Thinkers"
          />
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Thinkers}
                checked={personality.Feelers}
                onChange={handlePersonality}
                name="Feelers"
              />
            }
            label="Feelers"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Perceivers}
                checked={personality.Judgers}
                onChange={handlePersonality}
                name="Judgers"
              />
            }
            label="Judgers"
          />
          <FormControlLabel
            control={
              <Checkbox
                disabled={personality.Judgers}
                checked={personality.Perceivers}
                onChange={handlePersonality}
                name="Perceivers"
              />
            }
            label="Perceivers"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="reg"
          name="reg"
          // value={reg}
          label="Reg Number"
          fullWidth
          autoComplete="off"
        // onChange={handleAge}
        />
      </Grid>
    </React.Fragment>
  );
}
