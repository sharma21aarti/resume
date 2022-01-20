import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function FirstPage() {
  return (
    <div className="main-view">
      <div className="abcd">
        <header className="mainbar">
          <img
            src="https://www.pngitem.com/pimgs/m/537-5373150_woman-lady-resume-document-employee-shortlisted-avatar-shortlisted.png"
            alt="..."
            width="50"
            height="50"
            className="logo"
          ></img>
          <nav>
            <ul className="items">
              <li>
                <a href="">Templates</a>
              </li>
              <li>
                <a href="">Recomandations</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
          <div className="col-md-1">
            <a href="#">
              <i class="fab fa-github pt-0"></i>
            </a>
          </div>
        </header>
        <div className="d-flex">
          <div className="text">
            <h3 className="abcd">Free & Open Source</h3>
            <h1>
              Single Page
              <br />
              Resume Builder
            </h1>
            <div className="" style={{ float: "left", marginLeft: "70px" }}>
              <Link to="/editor">
                {/* <button> */}
                <span className="hero_CTA-sc-gaw50i-1 cVJeoU">
                  {" "}
                  Get Started
                </span>
                {/* </button> */}
              </Link>
            </div>
          </div>
          <div className="hiring">
            <img src="/hiring.svg" alt="..." width="506px" height="300px"></img>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-3 offset-md-1">
            <img
              src="/no-account.png"
              className="card-img-top "
              alt="..."
            ></img>
            <h5 className="card-title"> No Signup/signin</h5>
            <p className="card-text">
              Completely free and open source. No registration required. We do
              not store any of your information. Create unlimited resumes using
              our tool
            </p>
          </div>
          <div className="col-md-3 ">
            {" "}
            <img
              src="/timer.png"
              className="card-img-top"
              alt="..."
              // width="50px"
              // height="50px"
            ></img>
            <h5 className="card-title">Build in minutes</h5>
            <p className="card-text">
              With the powerful editor and wide range of professional/job ready
              templates, you can build your resume within a matter few clicks &
              key strokes.
            </p>
          </div>
          <div className="col-md-3 margin">
            <img src="/resume.png" className="card-img-top" alt="..."></img>

            <h5 className="card-title">Fit for your needs</h5>
            <p className="card-text">
              if you are developer,customize the template which suits your data
              and all you need to know is some basic knowledge of React and
              programming.
            </p>
          </div>
        </div>
        {/* <div className="row row-cols-1 row-cols-md-4  g-3 ">
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="/no-account.png"
                className="card-img-top "
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> No Signup/signin</h5>
                <p className="card-text">
                  Completely free and open source. No registration required. We
                  do not store any of your information. Create unlimited resumes
                  using our tool
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  border-0 ">
              <img
                src="/timer.png"
                className="card-img-top"
                alt="..."
                // width="50px"
                // height="50px"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Build in minutes</h5>
                <p className="card-text">
                  With the powerful editor and wide range of professional/job
                  ready templates, you can build your resume within a matter few
                  clicks & key strokes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card border-0">
              <img src="/resume.png" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Fit for your needs</h5>
                <p className="card-text">
                  if you are developer,customize the template which suits your
                  data and all you need to know is some basic knowledge of React
                  and programming.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FirstPage;
