import React, { useState } from "react";

function Language({ data, setData }) {
  const [showResult, setShowResult] = useState(false);
  const [languageData, setLanguageData] = useState([
    { id: 1, item: "javaScript", value: 3 },
    { id: 2, item: "html5", value: 5 },
    { id: 3, item: "CSS", value: 3 },
  ]);
  const [frameworks, setFrameworks] = useState([
    { id: 1, item: "React", value: 4 },
    { id: 2, item: "Angular", value: 3 },
  ]);
  // console.log("a", languageData);
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
          <i className="fas fa-wrench"></i>
        </div>
        {showResult ? (
          <Result
            frameworks={frameworks}
            setFrameworks={setFrameworks}
            languageData={languageData}
            setLanguageData={setLanguageData}
            data={data}
            setData={setData}
          />
        ) : null}
      </div>
    </div>
  );
}

const Result = ({
  languageData,
  setLanguageData,
  data,
  setData,
  frameworks,
  setFrameworks,
}) => {
  const inputHandler = (e, index, type) => {
    // let newData = { ...languageData };

    // newData[index][type] = e.target.value;
    // setLanguageData(newData);
    setLanguageData((prev) => {
      console.log(index, type);
      let newData = [...prev];
      newData[index][type] = e.target.value;
      return newData;
    });
    setData({ ...data, language: languageData });
  };

  const addItem = () => {
    // console.log(i);
    // console.log(item);
    setLanguageData([
      ...languageData,
      { id: languageData.length + 1, item: "default", value: 5 },
    ]);
    console.log("jsdgksgakj", { ...data, language: languageData });
  };

  const removeItem = (id) => {
    const removeItem = languageData.filter((type, index) => index !== id);
    console.log("filterd array", removeItem);

    setLanguageData(removeItem);

    setData({ ...data, language: removeItem });
  };

  const handler = (e, index, type) => {
    // console.log("first", type);
    setFrameworks((prev) => {
      let newKey = [...prev];
      newKey[index][type] = e.target.value;
      return newKey;
    });
    setData({ ...data, frameworks: frameworks });
  };

  const removeData = (id) => {
    const filterdItem = frameworks.filter((t, i) => i !== id);
    setFrameworks(filterdItem);
    console.log("first", filterdItem);
    setData({ ...data, frameworks: filterdItem });
  };

  const addData = () => {
    setFrameworks([
      ...frameworks,
      { id: frameworks.length, item: "default", value: "" },
    ]);
  };

  return (
    <div>
      <div id="results" className="search-results">
        <h2>Language</h2>
        {languageData.map((item, index) => {
          const progress = item.value * 20;
          return (
            <div key={index}>
              <div>
                <div className="">
                  <input
                    name={item.item}
                    value={item.item || ""}
                    onChange={(e) => inputHandler(e, index, "item")}
                  />
                </div>
                <input
                  name={item.value}
                  value={item.value || ""}
                  onChange={(e) => inputHandler(e, index, "value")}
                />

                <div className="progress" style={{ width: "205px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                  >
                    <span className="sr-only">{item.value}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => removeItem(index)}>
                <i className="fal fa-trash"></i>
              </button>
            </div>
          );
        })}
        <button
          onClick={() => {
            addItem();
          }}
        >
          Add Item
        </button>
        <hr style={{ color: "rgb(255, 255, 255)", height: "5px" }} />

        <h2>Frameworks</h2>
        {frameworks.map((item, index) => {
          // const progress = item.value * 20;
          return (
            <div key={index}>
              <input
                value={item.item || ""}
                name={item.item}
                onChange={(e) => handler(e, index, "item")}
              />
              <div>
                <input
                  name={item.item}
                  value={item.value || ""}
                  type="number"
                  onChange={(e) => handler(e, index, "value")}
                />

                <div className="progress" style={{ width: "205px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${item.value * 20}%` }}
                  >
                    <span className="sr-only">{item.item}</span>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={() => removeData(index)}>
                  <i className="fal fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
        <button onClick={() => addData()}>Add Item</button>
      </div>
    </div>
  );
};

export default Language;
