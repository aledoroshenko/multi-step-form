export type TValues = {
  firstName: string;
  lastName: string;
  gender: string;
  mailingAddress: string;
  phoneNumber: string;
  income: string;
  marketingEmails: boolean;
};

export type TErrors = { [P in keyof TValues]?: string };
export type TTouched = { [P in keyof TValues]?: boolean };
