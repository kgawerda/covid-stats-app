import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <p>Current Covid-19 statistics </p>
      (data taken from
      <a href="https://covid19api.com/"> Covid-19 API</a>)
    </div>
  );
};

export default Header;
