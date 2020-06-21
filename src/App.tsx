import React, { useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { getStepComponent } from "./components/steps/helpers/get-step-component";
import { validateStep } from "./components/steps/helpers/validation";
import { initialValues } from "./components/steps/helpers/initialValues";

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

const steps = ["Personal detail", "Contacts", "Apartments", "Review"];

function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // Imitating server requests.
  // For real-world case reducer is a better option.
  useEffect(() => {
    if (isSubmitting) {
      setIsLoading(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2000);
    }
  }, [isSubmitting]);

  const handleSubmit = () => {
    if (activeStep === 3) {
      setIsSubmitting(true);
    } else {
      setActiveStep((step) => step + 1);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{ ...initialValues }}
      onSubmit={handleSubmit}
      validate={validateStep(steps[activeStep])}
    >
      {({ values, errors, touched }) => {
        return (
          <main className={classes.layout}>
            <Paper className={classes.paper} elevation={1}>
              <Typography component="h1" variant="h4" align="center">
                Apply for an apartment
              </Typography>

              {isLoading ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  minHeight="300px"
                >
                  <CircularProgress />
                </Box>
              ) : isSubmitted ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  minHeight="300px"
                  flexDirection="column"
                >
                  <Typography component="h2" variant="h6" align="center">
                    Submitted!
                  </Typography>
                  <Typography align="center">
                    Your application is safe with us, and you will receive email
                    with application details
                  </Typography>
                </Box>
              ) : (
                <React.Fragment>
                  <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <Form>
                    {getStepComponent({
                      activeStep,
                      values,
                      errors,
                      touched,
                    })}
                    <div className={classes.buttons}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                      </Button>
                    </div>
                  </Form>
                </React.Fragment>
              )}
            </Paper>
          </main>
        );
      }}
    </Formik>
  );
}

export default App;
