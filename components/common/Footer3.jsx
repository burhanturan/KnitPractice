import Link from "next/link";

const styleFooter = {
  backgroundColor: "#0c2543",
  color: "#ffffff",
  fontSize: "15px",
  fontFamily: "Arial",
  minHeight: "340px",
};

const styleList = {
  marginTop: "70px",
};

const styleSecondList = {
  marginTop: "122px",
  marginLeft: "-400px",
}

// ms-5  start-50 col mt-4
export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className=" " style={{ ...styleFooter, paddingTop: "2px" }}>
        <div className="row">
          <div className="align-start ms-5 col-md-5">
            <ul
              style={{ ...styleList }}
              className=" "
            >
              <li className="mb-3 list-unstyled list-group-item">
                <Link
                  href="/"
                  className=" text-decoration-none text-white align-start ms-5 fs-4 fw-bold"
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
                  title="Go To What we do"
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
                  title="Go To What we do"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ ...styleSecondList }} className="col-md-3">
            <ul className="text-white">
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
