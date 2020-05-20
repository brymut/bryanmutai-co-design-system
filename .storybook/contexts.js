import { ThemeProvider } from "styled-components";
import { defaultTheme, lightTheme } from "../src/utils";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      {
        name: "Default theme",
        props: { theme: defaultTheme, default: true }
      },
      {
        name: "Light theme",
        props: { theme: lightTheme }
      }
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
];
