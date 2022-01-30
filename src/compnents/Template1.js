import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Language from "./Language";
import TemplateLables from "./TemplateLables";

function Template1() {
  const [data, setData] = useState({
    name: "Aarti Sharma",
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    role: "Software Developer",
    email: "aarti.sharmabhl@gmail.com",
    phone: "7339964934",
    location: "",
    relExperience: "1 years",
    totalExp: "1 years",
    Comment:
      "I am a web developer having expertise in frontend development and exposure to back- end development. I design and develop web applications using the latest technologies to deliver the product with quality code.",
    objective:
      "Eager to expand my skill set through external trainings to help boost all major front desk KPIs. Hoping to leverage organizational skills to help ABC Corp introduce time-saving schemes for all executives.",
    language: [
      { id: 1, item: "javaScript", value: 3 },
      { id: 2, item: "html5", value: 5 },
      { id: 3, item: "CSS", value: 3 },
    ],
    frameworks: [
      { id: 1, item: "React", value: 4 },
      { id: 2, item: "Angular", value: 3 },
    ],
    companies: [
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
    ],
    Experience: "Experience",
    Involvements: "Key Project/Involvements",
    Certificates: "Certificates And Awards",
    About: "About me",
    Career: "Career Objective",
    Technical: "Technical Expertise",
    Exposure: "Skills / Exposure",
    Methodology: "Methodology / Approach",
    Tools: "Tools",
    Education: "Education",
    RelevantExperience: "Relevant Experience",
    TotalExperience: "Total Experience",
  });

  return (
    <div className="row">
      {/* {console.log("new data", data)} */}
      <div className="col-md-2 left-bar">
        <nav className="leftbar">
          <ul className="icons">
            <li data_id="0" className="user-icon0">
              <div>
                <Intro data={data} setData={setData} />
              </div>
            </li>
            <li data_id="1" className="user-icon1">
              <button className="nav-item">
                <i className="fal fa-user-friends"></i>
              </button>
            </li>
            <li data_id="2" className="user-icon2">
              <div>
                <Language data={data} setData={setData} />
              </div>
            </li>
            <li data_id="3" className="user-icon3">
              <Experience data={data} setData={setData} />
            </li>
            <li data_id="4" className="user-icon4">
              <button className="nav-item">
                <Education />
              </button>
            </li>
            <li data_id="5" className="user-icon5">
              <button className="nav-item">
                <i className="fas fa-award"></i>
              </button>
            </li>
            <li data_id="6" className="user-icon6">
              <button className="nav-item">
                <i className="fal fa-shield-check"></i>
              </button>
            </li>
            <li data_id="7" className="user-icon7">
              <TemplateLables data={data} setData={setData} />
            </li>
          </ul>
        </nav>
      </div>

      <div className="col-md-8 ">
        <div className="main">
          <div className="row inside-main ">
            <div className="col-md-6">
              <div className=" okay">
                <div className="label">
                  <h1>{data.name}</h1>
                </div>
                <div>
                  <div style={{ margin: "0px 10px" }}>
                    <h3 className="role">
                      {data.role}
                      <span
                        style={{
                          color: "black",
                          float: "right",
                          fontSize: "10px",
                        }}
                      >
                        <i className="fas fa-phone-alt"></i>
                        {data.phone}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div style={{ margin: "0px 10px" }}>
                    <div className="relExperience">
                      {data.RelevantExperience}: {data.relExperience}
                      <div
                        style={{
                          color: "black",
                          float: "right",
                        }}
                      >
                        <i className="fas fa-envelope"></i>
                        {data.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div style={{ margin: "0px 10px" }}>
                    <div className="totalExp">
                      {data.TotalExperience}: {data.totalExp}
                      <span
                        style={{
                          color: "black",
                          float: "right",
                        }}
                      >
                        <i className="far fa-map-marker-check"></i>
                        {data.location}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="email">{data.email}</div> */}
                {/* <div className="location">{data.location}</div>

                <div className="totalExp">{data.totalExp}</div> */}
              </div>
              <div className="experience">
                <div>{data.Experience}</div>
                {data.companies.map((item) => {
                  return (
                    <div>
                      <div
                        style={{
                          minHeight: "150px",
                          marginTop: "10px",
                          marginRight: "10px",
                        }}
                      >
                        <div className="">
                          {item.company}{" "}
                          <div style={{ float: "right" }}>
                            {item.from}-{item.to}
                          </div>
                        </div>
                        <div className="">
                          {item.position}
                          <div style={{ float: "right" }}>{item.years}</div>
                        </div>
                        <div style={{ overflowWrap: "break-word" }}>
                          {item.description}{" "}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="involvment">{data.Involvements}</div>
              <div className="awards">{data.Certificates}</div>
            </div>
            <div className="col-md-5 ">
              <div className="okay about">
                <div>{data.About}</div>
                <div className="d-flex">
                  <img className="img" src={data.img} />
                  <p className="wrap ">{data.Comment}</p>
                </div>
              </div>
              <div className="career">
                <div>{data.Career} </div>
                <div className="object">{data.objective}</div>
              </div>
              <div className="technical">
                {data.Technical}
                {data.language.map((value) => {
                  return (
                    <div className="d-flex">
                      {/* {value.id} */}
                      {value.item}
                      {/* {value.value} */}
                      <div
                        className="progress"
                        style={{
                          width: "200px",
                          height: "8px",
                          marginLeft: "5px",
                          marginTop: "9px",
                        }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${value.value * 20}%` }}
                        >
                          <span class="sr-only"> {value.value}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {data.frameworks.map((value) => {
                  return (
                    <div className="d-flex">
                      {value.item}
                      <div
                        className="progress"
                        style={{
                          width: "200px",
                          height: "8px",
                          marginLeft: "5px",
                          marginTop: "9px",
                        }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${value.value * 20}%` }}
                        >
                          <span class="sr-only"> {value.value}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="skill">{data.Exposure}</div>
              <div className="approach">{data.Methodology}</div>
              <div className="tools">{data.Tools}</div>
              <div className="education">{data.Education}</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-md-2 right-bar">
        <nav className="rightbar">
          <ul className="icons">
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="fas fa-clone"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="far fa-palette"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="fas fa-search-minus"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="fas fa-search-plus"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="far fa-redo-alt"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="fad fa-cloud-upload-alt"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="fas fa-save"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" className="nav-item">
                <i className="fas fa-print"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Template1;
