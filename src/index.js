import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, lightTheme } from "./utils";

const App = () => {
  const [useLightTheme, setUseLightTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useLightTheme ? lightTheme : defaultTheme}>
      <button
        style={{ marging: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={(e) => setUseLightTheme(false)}
      >
        Default Theme
      </button>
      <button
        style={{ marging: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={(e) => setUseLightTheme(true)}
      >
        Light Theme
      </button>
      <button
        style={{ marging: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={(e) => setShowModal(!showModal)}
      >
        Show Modal
      </button>
      <div
        style={{
          background: useLightTheme
            ? lightTheme.primaryColor
            : defaultTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignUpModal
          showModal={showModal}
          setShowModal={setShowModal}
        ></SignUpModal>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
