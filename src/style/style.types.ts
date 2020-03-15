import { InterpolationWithTheme } from "@emotion/core";

type SizeKeys = "S" | "M" | "L";

export type Sizes = {
  [key in SizeKeys]: string | number;
};

type ColorKeys = "primary" | "secondary" | "warning" | "alert";

export type Colors = {
  [key in ColorKeys]: string;
};

export type Theme = {
  spacing: Sizes;
  colors: Colors;
};

export type Style = InterpolationWithTheme<Theme>;
export type Styles = Record<string, Style>;
