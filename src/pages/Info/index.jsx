import React from "react";
import { useParams } from "react-router";
import { data } from "../../components/Search/data";

const Info = () => {
  const { state } = useParams();

  return (
    <React.Fragment>
      {data
        .filter((el) => el.name.includes(state))
        .map((el) => (
          <p key={el.id}>{el.id},{el.name.toUpperCase()}</p>
        ))}
    </React.Fragment>
  );
};

export default Info;
