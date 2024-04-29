import Link from "next/link";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

const styleKnit = {
  color: "#18474D",
  fontSize: "60px",
  fontWeight: " bold, 900",
  marginBottom: "-10px",
};

const styleSoftware = {
  color: "#18474D",
  fontSize: "19px",
  marginTop: "10",
};

const styleButton = {
  backgroundColor: "#18474D",
  color: "#DDE9D3",
  marginBottom: "30px",
  minWidth: "150px",
};

const styleEnglish = {
  float: "right",
  margin: "10px",
  marginTop: "15px",
};

export default function Header() {
  return (
    <header
      style={{ height: "150px", marginTop: "20px" }}
      id="header"
      className=" container fixed-top position-sticky"
    >
      <div>
        
      </div>
      <div className=" d-flex align-items-center justify-content-between">
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

        <nav id="navbar" className="navbar gap-0 ">

          <ul className="justify-content-center">
            <li>
              <a className="nav-link " href="/yourchallenges">
                YOUR CHALLENGES
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/whatwedo">
                WHAT WE DO
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="ourapproach">
                OUR APPROACH
              </a>
            </li>

            <div
              className="row d-flex gap-2 flex-column"
              style={{ marginTop: "-20px" }}
            >
              <li>
                <a
                  className=" justify-content-center"
                  style={{ ...styleEnglish }}
                  href="#"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="getstarted justify-content-center rounded-0"
                  style={{ ...styleButton }}
                  href="#"
                >
                  LET&apos;S TALK
                </a>
              </li>
            </div>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
