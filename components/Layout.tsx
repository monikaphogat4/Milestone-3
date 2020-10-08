import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./NavBar";
import ThemeContext, { themes } from "../contexts/ThemeContext";

const Layout = () => {
  const [theme, setTheme] = useState(themes.light); //useState hook to add react state to function component

  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <div>
      <Head>
        <title>React App with Graphql</title>
      </Head>
      <ThemeContext.Provider value={theme}>
        <button className="theme-btn" onClick={toggleTheme}>
          <img src="Icon/icon4.png"></img>
        </button>
        <Navbar />
      </ThemeContext.Provider>
    </div>
  );
};
export default Layout;
