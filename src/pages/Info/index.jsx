import React from "react";
import { data } from "../../components/Window/data";

const Info = () => {
  return (
    <React.Fragment>
      {data.map(function (el) {
        return <div></div>;
      })}
    </React.Fragment>
  );
};

export default Info;
