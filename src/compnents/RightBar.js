import React, { useState } from "react";
import Intro from "./Intro";
import Language from "./Language";

function RightBar() {
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
    skill: "",
  });

  return (
    <div className="row">
      <div className="col-md-2 left-bar">
        <nav className="leftbar">
          <ul className="icons">
            <li data_id="0" className="user-icon0">
              <div>
                <Intro data={data} setData={setData} />
              </div>
            </li>
            <li data_id="1" className="user-icon1">
              <button class="nav-item">
                <i class="fal fa-user-friends"></i>
              </button>
            </li>
            <li data_id="2" className="user-icon2">
              <div>
                <Language data={data} setData={setData} />
              </div>
            </li>
            <li data_id="3" className="user-icon3">
              <button class="nav-item">
                <i class="far fa-suitcase"></i>
              </button>
            </li>
            <li data_id="4" className="user-icon4">
              <button class="nav-item">
                <i class="fas fa-university"></i>
              </button>
            </li>
            <li data_id="5" className="user-icon5">
              <button class="nav-item">
                <i class="fas fa-award"></i>
              </button>
            </li>
            <li data_id="6" className="user-icon6">
              <button class="nav-item">
                <i class="fal fa-shield-check"></i>
              </button>
            </li>
            <li data_id="7" className="user-icon7">
              <button class="nav-item">
                <i class="fas fa-tag"></i>
              </button>
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
                <div className="">
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
                        <i class="fas fa-phone-alt"></i>
                        {data.phone}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div style={{ margin: "0px 10px" }}>
                    <div className="relExperience">
                      Relavent Experience: {data.relExperience}
                      <div
                        style={{
                          color: "black",
                          float: "right",
                        }}
                      >
                        <i class="fas fa-envelope"></i>
                        {data.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div style={{ margin: "0px 10px" }}>
                    <div className="totalExp">
                      Total Experience: {data.totalExp}
                      <span
                        style={{
                          color: "black",
                          float: "right",
                        }}
                      >
                        <i class="far fa-map-marker-check"></i>
                        {data.location}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="email">{data.email}</div> */}
                {/* <div className="location">{data.location}</div>

                <div className="totalExp">{data.totalExp}</div> */}
              </div>
              <div className="experience">Experience</div>
              <div className="involvment">Involvement</div>
              <div className="awards">Involvement</div>
            </div>
            <div className="col-md-5 ">
              <div className="okay about">
                <div>About me</div>
                <div className="d-flex">
                  <img className="img" src={data.img} />
                  <p className="wrap ">{data.Comment}</p>
                </div>
              </div>
              <div className="career">
                <div>Career Objective</div>
                <div className="object">{data.objective}</div>
              </div>
              <div className="technical"> Technical</div>
              <div className="skill">
                {" "}
                Skills
                <div>{data.skill}</div>
              </div>
              <div className="approach">Approach</div>
              <div className="tools">Tools</div>
              <div className="education">Education</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-md-2 right-bar">
        <nav className="rightbar">
          <ul className="icons">
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="fas fa-clone"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="far fa-palette"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="fas fa-search-minus"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="fas fa-search-plus"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="far fa-redo-alt"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="fad fa-cloud-upload-alt"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="fas fa-save"></i>
              </a>
            </li>
            <li data_id="0">
              <a href="" class="nav-item">
                <i class="fas fa-print"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default RightBar;
