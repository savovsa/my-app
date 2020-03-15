import React, { useState } from "react";
import InputField, { OnChangeHandler } from "../InputField/InputField";
import { useLoginMutation } from "../../graphql/generated";

const initialValues = {
  email: "",
  password: ""
};

const LoginForm = () => {
  // Destructuring assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const [loginMutation, { data, loading, error }] = useLoginMutation();
  const [values, setValues] = useState(initialValues);

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

    loginMutation({
      variables: {
        email: values.email,
        password: values.password
      }
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.error(error);
    return <h1>There was an error. Please contact support</h1>;
  }

  if (data) {
    return <h1>{data.login}</h1>;
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
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

export default LoginForm;
