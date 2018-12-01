import React from "react";
import HeaderData from "../data/headerData.json";

const HeaderText = props => {
  //console.log(props);

  //destructuring: store the props in a variable
  // const { cssClass, click, title } = props;

  const componentName = props.componentName;
  return (
    <div>
      <h1>{HeaderData[componentName].heading}</h1>{" "}
      {/* bracket notation for refering to a variable!! */}
      <p>{HeaderData[componentName].text}</p>
    </div>
  );
};

export default HeaderText;
