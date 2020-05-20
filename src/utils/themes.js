import { primary, neutral, warning, success, error } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primary[100],
  primaryColorHover: primary[200],
  primaryColorActive: primary[200],
  secondaryColor: primary[200],
  secondaryColorHover: primary[100],
  secondaryColorActive: primary[100],
  status: {
    warningColor: warning[100],
    warningColorHover: primary[200],
    warningColorActive: primary[200],
    errorColor: error[100],
    errorColorHover: primary[200],
    errorColorActive: primary[200],
    successColor: success[100],
    successColorHover: primary[200],
    successColorActive: primary[200],
  },
  disabledColor: neutral[400],
  formElementBackground: primary[100],
  textColor: primary[200],
  textColorInverted: primary[100],
  textColorDisabled: neutral[400],
  primaryFont,
};

export const lightTheme = {
  primaryColor: primary[200],
  primaryColorHover: primary[100],
  primaryColorActive: primary[100],
  secondaryColor: primary[100],
  secondaryColorHover: primary[200],
  secondaryColorActive: primary[200],
  status: {
    warningColor: warning[100],
    warningColorHover: primary[100],
    warningColorActive: primary[100],
    errorColor: error[100],
    errorColorHover: primary[100],
    errorColorActive: primary[100],
    successColor: success[100],
    successColorHover: primary[100],
    successColorActive: primary[100],
  },
  disabledColor: neutral[400],
  formElementBackground: primary[200],
  textColor: primary[100],
  textColorInverted: primary[200],
  textColorDisabled: neutral[400],
  primaryFont,
};
