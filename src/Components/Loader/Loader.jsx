import React from "react";
import "./loader.scss";
import {MoonLoader} from "react-spinners";

export default function Loader() {
  return(
    <div className="loader">
        <div className="container">
        <MoonLoader color="#b94fab" />
        </div>
    </div>
    );
}
