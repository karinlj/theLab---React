import React from "react";
import "./Backdrop.scss";

const Backdrop = props => {
  return (
    <div className="backdrop" onClick={props.clickBackdrop} />

    /* <div className="backdrop" onClick={props.clickBackdrop} />   closing sidedrawer */
  );
};

export default Backdrop;
