import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

export function ContactData() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact data
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="mailingAddress"
            name="mailingAddress"
            label="Mailing address"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="checked"
                color="primary"
              />
            }
            label="Allow marketing emails"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
