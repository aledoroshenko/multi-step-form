import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Field } from "formik";
import { TErrors, TTouched } from "./helpers/types";

type TContactDataProps = {
  errors: TErrors;
  touched: TTouched;
};

export function ContactData({ errors, touched }: TContactDataProps) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact data
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            name="phoneNumber"
            label="Phone number *"
            fullWidth
            as={TextField}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            name="mailingAddress"
            label="Mailing address"
            fullWidth
            as={TextField}
            error={touched.mailingAddress && Boolean(errors.mailingAddress)}
            helperText={touched.mailingAddress && errors.mailingAddress}
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            name="marketingEmails"
            label="Allow marketing emails"
            error={touched.marketingEmails && Boolean(errors.marketingEmails)}
            as={({ onChange, value, name }: any) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={onChange}
                    name={name}
                    color="primary"
                  />
                }
                label="Send me email updates"
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
