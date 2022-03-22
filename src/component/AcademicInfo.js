import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

export default function AcademicForm(props) {

  const classes = useStyles();
  const [stream, setStream] = React.useState(props.data.stream);
  const [grade, setGrade] = React.useState(props.data.grade);

  const handleStream = (event) => {
    setStream(event.target.value);
  };

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };


  useEffect(() => {
    let obj = {
      ...props.data,
      stream: stream,
      grade: grade
    }
    props.callback(obj)
  }, [stream, grade])


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic Level
      </Typography>
      <Grid container spacing={3} direction="column" >
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel>Department</InputLabel>
            <Select
              value={stream}
              onChange={handleStream}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
              <MenuItem value={"Industrial Chemistry"}>Industrial Chemistry</MenuItem>
              <MenuItem value={"Industrial Physics"}>Industrial Physics</MenuItem>
              <MenuItem value={"Computer Engineering"}>Computer Engineering</MenuItem>
              <MenuItem value={"Electrical Engineering"}>Electrical Engineering</MenuItem>
              <MenuItem value={"Agric Science"}>Agric Science</MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel >level</InputLabel>
            <Select

              value={grade}
              onChange={handleGrade}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"500L"}>500L</MenuItem>
              <MenuItem value={"400L"}>400L</MenuItem>
              <MenuItem value={"300L"}>300L</MenuItem>
              <MenuItem value={"200L"}>200L</MenuItem>
              <MenuItem value={"100L"}>100L</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}