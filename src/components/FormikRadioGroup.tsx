import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import React from "react";

export const FormikRadioGroup = ({
  field,
  form,
  name,
  options,
  ...props
}: any) => {
  const fieldName = name || field.name;

  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options.map(({ label, value }: { label: string; value: string }) => (
          <FormControlLabel value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </React.Fragment>
  );
};
