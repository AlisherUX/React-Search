import React, { useState } from "react";
import { data } from "./data";
import "./style.css";
import { SearchOutlined } from "@ant-design/icons";

const Defind = () => {
  const [input, setInput] = useState("");

  return (
    <section>
      <div id="wrapper">
        <div className="input-wrapper">
          <SearchOutlined />
          <input
            type="text"
            id="input"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div id="helper">
          {data
            .filter((state) => state.name.toLowerCase().includes(input))
            .map((state) => (
              <p id="text" key={state.key}>
                {state.name}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Defind;
