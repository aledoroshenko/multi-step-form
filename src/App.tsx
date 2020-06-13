import React from "react";
import { PersonalDetails } from "./PersonalDetails";
import { ContactData } from "./ContactData";
import { Salary } from "./Salary";
import {
  makeStyles,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const steps = ["Personal detail", "Contacts", "Appartmens", "Review"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalDetails />;
    case 1:
      return <ContactData />;
    case 2:
      return <Salary />;
    case 3:
      return <div>Review your order</div>;
    default:
      throw new Error("Unknown step");
  }
}

function App() {
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={1}>
        <Typography component="h1" variant="h4" align="center">
          New user
        </Typography>
        <Stepper activeStep={activeStep}>
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
                Your application submitted successfully.
              </Typography>
              <Typography variant="subtitle1">
                We received you details and come back to you soon.
              </Typography>
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
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </main>
  );
}

export default App;
