import React, { useState } from "react";

function Language({ data, setData }) {
  const [showResult, setShowResult] = useState(false);
  const [languageData, setLanguageData] = useState([
    { sName: "javaScript" },
    { sName: "html5" },
  ]);
  const handleChange = () => {
    setShowResult(!showResult);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          onClick={handleChange}
          id="results"
          className="search-results"
          style={{ cursor: "pointer" }}
          className="nav-item"
        >
          <i class="fas fa-wrench"></i>
        </div>
        {showResult ? (
          <Result data={languageData} setData={setLanguageData} />
        ) : null}
      </div>
    </div>
  );
}

const Result = ({ data, setData }) => {
  // const inputHandler = (e, index) => {
  //   console.log(e.target.value);
  //   console.log(index);

  //   let newData = data;

  //   newData[index]["sName"] = e.target.value;
  //   setData(newData);
  // };
  console.log(data);

  return (
    <div>
      <div id="results" className="search-results">
        <h2>Language</h2>
        {data.map((name, index) => {
          return (
            <div key={index}>
              <label>
                name
                {":  "}
                <input
                  name="skill"
                  value="aarti"
                  // onChange={(e) => inputHandler(e, index)}
                />
              </label>
              {/* <label>
                code
                {":  "}
                <input
                  name="skill"
                  value={code}
                  onChange={(e) => inputHandler(e, index)}
                />
              </label> */}
            </div>
          );
        })}
        {/* <div>
          <label className="input">
            <div className="d-flex">
              <div>
                <input
                  name="skill"
                  type="text"
                  onChange={inputHandler}
                  class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
                />
              </div>
              <div>
                <button
                  // onClick={deleteItem}
                  style={{
                    width: "50px",
                    height: "45px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </label>
        </div> */}
        {/* <div>
          <button
            style={{
              width: "50px",
              height: "45px",
              paddingLeft: "120px",
              paddingRight: "140px",
            }}
          >
            <i class="fal fa-plus-circle"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Language;
