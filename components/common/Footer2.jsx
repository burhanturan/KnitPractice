import Link from "next/link";
import { TbSquareLetterX } from "react-icons/tb";

const styleFooter = {
  backgroundColor: "#0c2543",
  color: "#ffffff",
  fontSize: "15px",
  fontFamily: "Arial",
  minHeight: "340px",
};

const styleList = {
  marginTop: "50px",
  marginLeft: "50px",
};

const styleSecondList = {
  marginTop: "50px",
  marginLeft: "-300px",
};

const styleHeader = {
  color: "#ffffff",
  fontSize: "60px",
  fontFamily: "Arial",
  marginBottom: "-25px",
};

// ms-5  start-50 col mt-4
export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className=" " style={{ ...styleFooter, paddingTop: "4px" }}>
        <div className="container" style={{ ...styleList }}>
          <div className="row">
            <div className="col-md-5">
              <ul>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    href="/"
                    className=" text-decoration-none text-white align-start ms-5 fs-4 fw-bold"
                    title="Go To Home"
                  >
                    KNIT SOFTWARE
                  </Link>
                </li>
                <li className="mb-3  list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To What we do"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go Your Challenges"
                  >
                    Our Clients
                  </Link>
                </li>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To What we do"
                  >
                    Our Products
                  </Link>
                </li>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To What we do"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To Lets Talk"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3" style={{ ...styleSecondList }}>
              <ul>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To What we do"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To What we do"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3 list-unstyled list-group-item">
                  <Link
                    className="text-decoration-none ms-5 text-white"
                    href="/"
                    title="Go To What we do"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ms-5 justify-content-between align-items-center">
              <ul className="">
                <Link
                  // style={{ ...stylesWholeHeader }}
                  className="navbar-brand"
                  href="/"
                >
                  <div className="d-flex align-items-center flex-column mb-0">
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
                        marginTop: "-10",
                        fontFamily: "Fredoka One",
                      }}
                    >
                      <b>software</b>
                    </span>
                  </div>
                </Link>

                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <Link className="fs-1 text-white" href={"/"}>
                          <TbSquareLetterX />
                        </Link>
                        <Link className="fs-1 text-white" href={"/"}>
                          <TbSquareLetterX />
                        </Link>
                        <Link className="fs-1 text-white" href={"/"}>
                          <TbSquareLetterX />
                        </Link>
                        <Link className="fs-1 text-white" href={"/"}>
                          <TbSquareLetterX />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>

                <div className=" ">
                  <div className="container d-flex justify-content-between align-items-center">
                    <Link className="fs-1 text-white" href={"/"}>
                      <TbSquareLetterX />
                    </Link>
                    <Link className="fs-1 text-white" href={"/"}>
                      <TbSquareLetterX />
                    </Link>
                    <Link className="fs-1 text-white" href={"/"}>
                      <TbSquareLetterX />
                    </Link>
                    <Link className="fs-1 text-white" href={"/"}>
                      <TbSquareLetterX />
                    </Link>
                    <div>Socials</div>
                  </div>
                </div>

                <p className="justify-content-between align-items-center">Socials</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 ms-3">
          <p className="align-start fs-6">
            KnitSoftware.com © 2022 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
