import React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormLabel,
  FormControl,
  Box,
} from "@material-ui/core";
import { Field } from "formik";
import { FormikRadioGroup } from "../FormikRadioGroup";
import { TErrors, TTouched } from "./helpers/types";

type TPersonalDetailsProps = {
  errors: TErrors;
  touched: TTouched;
};

export function PersonalDetails({ errors, touched }: TPersonalDetailsProps) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12}>
          <Field
            fullWidth
            name="firstName"
            label="First name *"
            as={TextField}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            fullWidth
            name="lastName"
            label="Last name *"
            as={TextField}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.firstName}
          />
        </Grid>

        <Grid item xs={12}>
          <Box mt={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <Field
                name="gender"
                options={[
                  { label: "Male", value: "MALE" },
                  { label: "Female", value: "FEMALE" },
                  { label: "Other", value: "OTHER" },
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
