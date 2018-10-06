import React from "react";
import "./Header.css";

const Header = props => (
  <div col-4>
    <ul className="nav nav-pills nav-justified p-3">
      <li>
        <a href="/">🏔 Beautiful Places 🏔</a>
      </li>
      <li
        className={
          props.message.indexOf("wrong") !== -1
            ? "desc-incorrect"
            : props.message.indexOf("right") !== -1
              ? "desc-correct"
              : "desc-normal"
        }
      >
        {props.message}
      </li>
      <li>
        🏔 Score: <span style={{ color: "green" }}>{props.curScore}</span> | Top
        Score: {props.topScore} 🏔
      </li>
    </ul>
  </div>
);

export default Header;
