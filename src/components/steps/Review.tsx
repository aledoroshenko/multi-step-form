import React from "react";
import { TValues } from "./helpers/types";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field } from "formik";
import { FormikRadioGroup } from "../FormikRadioGroup";

type TReviewProps = {
  values: TValues;
};

const temp = {
  firstName: "asdfasdf",
  lastName: "asdfasdf",
  gender: "FEMALE",
  mailingAddress: "asdfasdf",
  phoneNumber: "asdfasdf",
  income: "1500",
  marketingEmails: true,
};

const incomeRange: { [key: string]: string } = {
  "<600": "< 600€",
  "1500": "600-1500€",
  "2500": "1500-2500€",
  ">5000": "> 2500€",
};

const gender: { [key: string]: string } = {
  MALE: "Male",
  FEMALE: "Female",
  OTHER: "Other",
};

export function Review({ values }: TReviewProps) {
  console.log(values);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review data
      </Typography>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12}>
          <List dense={true}>
            <ListItem>
              <ListItemText primary={`First name: ${values.firstName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Last name: ${values.lastName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Gender: ${gender[values.gender]}`} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={`Mailing address: ${values.mailingAddress}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Phone: ${values.phoneNumber}`} />
            </ListItem>
            <ListItem>
              {values.marketingEmails ? (
                <ListItemText primary={`Email updates allowed`} />
              ) : (
                <ListItemText primary={`Email updates not allowed`} />
              )}
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={`Income: ${incomeRange[values.income]}`} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
