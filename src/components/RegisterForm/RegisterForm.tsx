import React, { useState } from "react";
import InputField from "../InputField";
import { OnChangeHandler } from "../InputField/InputField";
import useForm from "../../hooks/useForm";
import { useRegisterMutation } from "../../graphql/generated";

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const RegisterForm: React.FC = () => {
  const [values, setValues] = useState(initialValues);
  const [doRegister, { data, loading, error }] = useRegisterMutation();

  const onChange: OnChangeHandler = event => {
    // Destructuring assignment
    const { value, name } = event.currentTarget;

    const newValues = {
      // Spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      ...values,
      [name]: value
    };

    setValues(newValues);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //Prevent from reloading the browser

    const options = {
      variables: { user: values }
    };

    doRegister(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <InputField
        name="name"
        label="Name"
        value={values.name}
        onChange={onChange}
      />

      <InputField
        name="email"
        label="Email"
        value={values.email}
        onChange={onChange}
      />
      <InputField
        name="password"
        label="Password"
        value={values.password}
        onChange={onChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default RegisterForm;
