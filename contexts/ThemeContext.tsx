//Context example to change nav bar  theme

import React from "react";

export const themes = {
  dark: {
    background: "black",
  },
  light: {
    background: "grey",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
