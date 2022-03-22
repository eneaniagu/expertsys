import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function PersonalForm(props) {

  const classes = useStyles();
  const [firstName, setFirstName] = React.useState(props.data.firstName);
  const [lastName, setLastName] = React.useState(props.data.lastName);
  const [age, setAge] = React.useState(props.data.age);
  const [gender, setGender] = React.useState(props.data.gender);

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleAge = (event) => {
    setAge(event.target.value)
  }

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    let obj = {
      ...props.data,
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender
    }
    props.callback(obj)
  }, [firstName, lastName, age, gender])


  return (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={firstName}
            label="First name"
            fullWidth
            onChange={handleFirstName}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={lastName}
            label="Last name"
            fullWidth
            onChange={handleLastName}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            value={age}
            label="Age"
            fullWidth
            autoComplete="off"
            onChange={handleAge}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={handleGender}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
