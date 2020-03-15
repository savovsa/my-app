import { useState } from "react";
import { OnChangeHandler } from "../components/InputField/InputField";

function useForm(initialValues: Record<string, string>) {
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

  return [values, onChange];
}

export default useForm;
