/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import style from "./Button.styles";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = props => {
  return (
    <button css={style} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
