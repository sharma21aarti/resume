import React, { useState } from "react";

function TemplateLables({ data, setData }) {
  const [showResult, setShowResult] = useState(false);
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
          <i className="fas fa-tag"></i>
        </div>
        {showResult ? <Result data={data} setData={setData} /> : null}
      </div>
    </div>
  );
}

const Result = ({ data, setData }) => {
  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div
        id="results"
        className="search-results"
        style={{ marginLeft: "15px" }}
      >
        <h2>Template Lables</h2>
        <div>
          <label className="input">
            <br />
            <input
              name="Experience"
              type="text"
              placeholder=" Experience"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Involvements"
              type="text"
              placeholder="Key Project/Involvements"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Certificates"
              type="text"
              placeholder=" Certificates And Awards"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="About "
              type="text"
              placeholder="About me"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Career "
              type="text"
              placeholder="Career Objective"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Technical "
              type="text"
              placeholder="Technical Expertise"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Exposure"
              type="text"
              placeholder="Skills / Exposure"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Methodology"
              type="text"
              placeholder="Methodology / Approach"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Tools"
              type="text"
              placeholder="Tools"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="Education"
              type="text"
              placeholder="Education"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="RelevantExperience"
              type="text"
              placeholder="Relevant Experience"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            <br />
            <input
              name="TotalExperience"
              type="text"
              placeholder="Total Experience"
              onChange={inputHandler}
              className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          {/* <label className="input">
            Summary <br />
            <section>
              <textarea
                name="Comment"
                onChange={inputHandler}
                style={{
                  backgroundColor: "rgb(66, 66, 66)",
                  height: "100px",
                  width: "210px",
                }}
              />
            </section>
          </label> */}
          {/* <label className="input">
            Objective <br />
            <section>
              <textarea
                name="objective"
                onChange={inputHandler}
                style={{
                  backgroundColor: "rgb(66, 66, 66)",
                  height: "100px",
                  width: "210px",
                }}
              />
            </section>
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default TemplateLables;
