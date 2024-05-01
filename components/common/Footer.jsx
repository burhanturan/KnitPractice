import { Fredoka } from "next/font/google";
import Link from "next/link";
import React from "react";

import { TbLetterX } from "react-icons/tb";
const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

const stylesWholeFooter = {
  backgroundColor: "#0c2543",
};

const styleKnit = {
  float: "right",
  color: "#ffffff",
  fontSize: "60px",
  marginBottom: "45px",
};

const styleSoftware = {
  color: "#ffffff",
  fontSize: "19px",
  fontFamily: "arial",
  marginTop: "-55px",
};

const footer = () => {
  return (
    <footer className="footer" style={{ ...stylesWholeFooter }}>
      <div className="container justify-content-end">
        <div className="row gy-4">

          <div className="col-lg-2 col-6 footer-links">
            {/* <h4 className="fs-5 text-white">KNIT SOFTWARE</h4> */}
            <ul>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-decoration-none text-white fs-5 mt-1 fw-bold"
                >
                  KNIT SOFTWARE
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-decoration-none text-white fs-5 mt-1"
                >
                  About us
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-decoration-none text-white fs-5">
                  Our Clients
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-decoration-none text-white fs-5 mt-2"
                >
                  Our Products
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-decoration-none text-white fs-5 mt-2"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white fs-5 mt-2"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-2 col-6 footer-links"
            style={{ marginTop: "80px" }}
          >
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
              <li>
                <a href="#" className="text-decoration-none text-white fs-5">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div
            className=" col-lg-5 col-md-12 d-flex flex-column align-items-end justify-content-start"
            style={{ float: "right" }}
          >

            <h1 className="logo">
              <Link className="navbar-brand" href="/">
                <div className="d-flex align-items-center flex-column mb-0">
                  <span
                    style={{
                      ...styleKnit,
                    }}
                    className={fredoka.className}
                  >
                    <strong>KNIT</strong>
                  </span>

                  <span
                    style={{
                      ...styleSoftware,
                    }}
                  >
                    software
                  </span>
                </div>
              </Link>
            </h1>

            <div className="row social-links d-flex align-items-center justify-content-center mt-4">
              <a href="#">
                <TbLetterX style={{ color: "#ffffff" }} />
              </a>
              <a href="#">
                <TbLetterX style={{ color: "#ffffff" }} />
              </a>
              <a href="#">
                <TbLetterX style={{ color: "#ffffff" }} />
              </a>
              <a href="#">
                <TbLetterX style={{ color: "#ffffff" }} />
              </a>
              <div>
                <span>Socials</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-0" style={{ marginLeft: "55px", marginRight: "auto" }}>
        <div className=" text-start text-white ">
          <span>KnitSoftware.com &copy; 2024. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
