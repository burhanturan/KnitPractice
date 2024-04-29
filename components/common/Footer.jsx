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
            <h4 className="fs-5 ">KNIT SOFTWARE</h4>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-white fs-5 mt-2">
                  About us
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-white fs-5">
                  Our Clients
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-white fs-5 mt-2">
                  Our Products
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-white fs-5 mt-2">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white fs-5 mt-2">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-2 col-6 footer-links"
            style={{ marginTop: "68px" }}
          >
            {/* <h4>Our Services</h4> */}
            <ul>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-white fs-5">
                  Terms of Service
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-white fs-5">
                  Privacy Policy
                </a>
              </li>
              <li >
                <a href="#" className="text-decoration-none text-white fs-5">
                  Cookie Policy
                </a>
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

      <div className="mt-0" style={{marginLeft: "55px", marginRight: "auto"}}>
        <div className="copyright">
          <span>KnitSoftware.com &copy; 2024. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
