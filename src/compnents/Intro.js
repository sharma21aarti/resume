import React, { useState } from "react";

function Intro({ data, setData }) {
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
          <i class="far fa-user"></i>
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
      <div id="results" className="search-results">
        <h2>Intro</h2>
        <div>
          <label className="input">
            Name <br />
            <input
              name="name"
              type="text"
              placeholder="Jane Doe"
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Image
            <br />
            <input
              name="img"
              type="text"
              placeholder="src"
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Role <br />
            <input
              name="role"
              type="text"
              placeholder="software Developer"
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Email
            <br />
            <input
              name="email"
              name="email"
              type="text"
              placeholder="...@gmail.com"
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Phone <br />
            <input
              name="phone"
              maxLength="10"
              pattern="[0-9]"
              type="tel"
              placeholder=".........."
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Location
            <br />
            <input
              name="location"
              type="text"
              placeholder=""
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Relavent Experience <br />
            <input
              name="relExperience"
              type="text"
              placeholder="..Years"
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
            Total Experience <br />
            <input
              name="totalExp"
              type="text"
              placeholder="Jane Doe"
              onChange={inputHandler}
              class="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
            />
          </label>
          <label className="input">
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
          </label>
          <label className="input">
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
          </label>
        </div>
      </div>
    </div>
  );
};

export default Intro;
