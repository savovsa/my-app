/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import styles from "./Home.styles";

const Home: React.FC = () => {
  return (
    <section css={styles.container}>
      <h1 css={styles.heading}>Home</h1>
      <RegisterForm />
      <LoginForm />
    </section>
  );
};

export default Home;
