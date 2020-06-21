import { TErrors, TValues } from "./types";

export const validateStep = (step: string): ((values: TValues) => TErrors) => {
  const map = {
    "Personal detail": (values: TValues): TErrors => {
      const errors: TErrors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      }
      return errors;
    },
    Contacts: (values: TValues): TErrors => {
      const errors: TErrors = {};

      if (!values.phoneNumber) {
        errors.phoneNumber = "Required";
      }

      return errors;
    },
  };

  // @ts-ignore
  return map[step];
};
