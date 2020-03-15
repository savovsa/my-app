import React from "react";

export type OnChangeHandler = (
  event: React.FormEvent<HTMLInputElement>
) => void;

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: OnChangeHandler;
}

const InputField: React.FC<Props> = ({ name, label, value, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input name={name} value={value} onChange={onChange} />
    </React.Fragment>
  );
};

export default InputField;
