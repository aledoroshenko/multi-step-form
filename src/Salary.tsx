import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export function Salary() {
  const classes = useStyles();
  const [range, setRange] = React.useState("600-1500");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRange(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Some apartments header
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="income-range-label">Monthly income</InputLabel>
            <Select
              labelId="income-range-label"
              id="income-range"
              value={range}
              onChange={handleChange}
            >
              <MenuItem value={"600"}>less then 600€</MenuItem>
              <MenuItem value={"600-1500"}>600-1500€</MenuItem>
              <MenuItem value={"1500-3500"}>1500-3500€</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
