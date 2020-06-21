import { PersonalDetails } from "../PersonalDetails";
import { ContactData } from "../ContactData";
import { Salary } from "../Salary";
import React from "react";
import { TErrors, TTouched, TValues } from "./types";
import { Review } from "../Review";

type TGetStepComponentProps = {
  activeStep: number;
  values: TValues;
  errors: TErrors;
  touched: TTouched;
};

export function getStepComponent({
  activeStep,
  values,
  errors,
  touched,
}: TGetStepComponentProps) {
  switch (activeStep) {
    case 0:
      return <PersonalDetails errors={errors} touched={touched} />;
    case 1:
      return <ContactData errors={errors} touched={touched} />;
    case 2:
      return <Salary />;
    case 3:
      return <Review values={values} />;
    default:
      throw new Error("Unknown step");
  }
}
