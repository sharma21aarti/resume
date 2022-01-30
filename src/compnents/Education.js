import React, { useState } from "react";

function Education(data, setData) {
  const [showResult, setShowResult] = useState(false);
  const handleChange = () => {
    setShowResult(!showResult);
  };
  return (
    <div>
      <div className="d-flex">
        <div
          onClick={handleChange}
          id="result"
          //   className="search-results"
          style={{ cursor: "pointer" }}
          className="nav-item"
        >
          <i className="fas fa-university"></i>
          {showResult ? <Result /> : null}
        </div>
      </div>
    </div>
  );
}

const Result = () => {
  return (
    <div>
      <input>hello</input>
    </div>
  );
};

export default Education;
