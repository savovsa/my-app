/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import Counter from "../../components/Counter";
import styles from "./Home.styles";

const Home: React.FC = () => {
  return (
    <section css={styles.container}>
      <h1 css={styles.heading}>Home</h1>
      <Counter />
      <RegisterForm />
      <LoginForm />
    </section>
  );
};

export default Home;
