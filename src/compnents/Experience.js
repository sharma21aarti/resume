import React, { useState } from "react";

function Experience({ data, setData }) {
  const [showResult, setShowResult] = useState(false);
  const [company, setCompany] = useState([
    {
      company: "Company1 ",
      position: "Software Developer",
      from: "2000",
      to: "2003",
      years: "3",
      description: "",
    },
    {
      company: "company2",
      position: "Software Developer",
      from: "2003",
      to: "2007",
      years: "4",
      description: "",
    },
    {
      company: "company3",
      position: "Software Developer",
      from: "2007",
      to: "2012",
      years: "5",
      description: "",
    },
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
          <i class="fad fa-suitcase"></i>
        </div>
        {showResult ? (
          <Result
            data={data}
            setData={setData}
            company={company}
            setCompany={setCompany}
          />
        ) : null}
      </div>
    </div>
  );
}
const Result = ({ data, setData, company, setCompany }) => {
  const inputHandler = (e, index, type) => {
    setCompany(() => {
      const newCompany = [...company];
      newCompany[index][type] = e.target.value;
      return newCompany;
    });
    setData({ ...data, companies: company });
    // console.log("first", company);
  };

  const removeHandle = (id) => {
    const filterdItem = company.filter((t, i) => i !== id);
    // return filterdItem;
    setCompany(filterdItem);
    setData({ ...data, companies: filterdItem });
    console.log("first", filterdItem);
  };
  const addExperience = () => {
    setCompany([
      ...company,
      {
        company: "",
        position: "",
        from: "",
        to: "",
        years: "",
        description: "",
      },
    ]);
  };

  return (
    <div>
      <div id="results" className="search-results">
        <h2>Experience</h2>
        {company.map((i, index) => {
          return (
            <div key={index}>
              <label className="input">
                <div className="dropdown">
                  <button
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ width: "210px", height: "35px" }}
                  >
                    company {index + 1}
                  </button>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                    style={{ paddingleft: "25px" }}
                  >
                    <input
                      name={i.company}
                      value={i.company}
                      type="text"
                      onChange={(e) => inputHandler(e, index, "company")}
                      className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
                      style={{ width: "250px", height: "35px" }}
                    />

                    <input
                      name={i.position}
                      value={i.position}
                      type="text"
                      placeholder="Position"
                      onChange={(e) => inputHandler(e, index, "position")}
                      className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
                      style={{ width: "250px", height: "35px" }}
                    />
                    <input
                      name={i.from}
                      value={i.from}
                      type="text"
                      placeholder="From"
                      onChange={(e) => inputHandler(e, index, "from")}
                      className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
                      style={{ width: "250px", height: "35px" }}
                    />
                    <input
                      name={i.to}
                      value={i.to}
                      type="text"
                      placeholder="To"
                      onChange={(e) => inputHandler(e, index, "to")}
                      className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
                      style={{ width: "250px", height: "35px" }}
                    />
                    <input
                      name={i.years}
                      value={i.years}
                      type="text"
                      placeholder="..years"
                      onChange={(e) => inputHandler(e, index, "years")}
                      className="ant-input IntroEdit__Input-sc-1acngfg-2 cPwRGF"
                      style={{ width: "250px", height: "35px" }}
                    />
                    <section>
                      <textarea
                        name={i.description}
                        value={i.description}
                        onChange={(e) => inputHandler(e, index, "description")}
                        style={{
                          // backgroundColor: "rgb(66, 66, 66)",
                          height: "150px",
                          width: "250px",
                        }}
                      />
                    </section>
                  </ul>
                </div>
              </label>
              <div>
                <button
                  onClick={() => {
                    removeHandle(index);
                  }}
                >
                  <i class="fal fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => addExperience()}>Add button</button>
    </div>
  );
};

export default Experience;
