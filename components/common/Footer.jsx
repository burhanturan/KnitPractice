
import React from "react";


import { TbLetterX } from "react-icons/tb";

const stylesWholeFooter = {
  backgroundColor: "#0c2543",
};

const styleHeader = {
  color: "#ffffff",
  fontSize: "60px",
  fontFamily: "Fredoka One",
  marginBottom: "45px",
};

const footer = () => {
  return (
    <footer className="footer" style={{ ...stylesWholeFooter }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-2 col-6 footer-links">
            <h4>KNIT SOFTWARE</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-5 col-md-12 d-flex  flex-column footer-info align-items-end ">
            <a href="/" className="logo d-flex align-items-center">
              <div className="w-100 d-flex align-items-center flex-column mb-0">
                <span
                  style={{
                    ...styleHeader,
                  }}
                >
                  <b>KNIT</b>
                </span>

                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "19px",
                    fontFamily: "Fredoka One",
                  }}
                >
                  <b>software</b>
                </span>
              </div>
            </a>

            <div className="social-links d-flex align-items-end mt-4">
              <a href="#">
                <TbLetterX />
              </a>
              <a href="#">
                <TbLetterX />
              </a>
              <a href="#">
                <TbLetterX />
              </a>
              <a href="#">
                <TbLetterX />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Logis</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
