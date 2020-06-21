import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  Box,
  FormLabel,
} from "@material-ui/core";
import { Field } from "formik";
import { FormikRadioGroup } from "../FormikRadioGroup";

export function Salary() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Money
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mt={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Monthly income</FormLabel>
              <Field
                name="income"
                options={[
                  { label: "< 600€", value: " <600" },
                  { label: "600-1500€", value: "1500" },
                  { label: "1500-2500€", value: "2500" },
                  { label: "> 2500€", value: ">5000" },
                ]}
                component={FormikRadioGroup}
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
