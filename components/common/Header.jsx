import React from "react";

const styleButton = {
  backgroundColor: "#18474D",
  color: "#DDE9D3",
};

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <div
            style={{ color: "#18474D" }}
            className="d-flex align-items-center flex-column"
          >
            <span style={{ fontSize: "60px" }}>KNIT</span>
            <span style={{ fontSize: "10px", marginTop: "0", paddingTop: "0" }}>
              Software
            </span>
          </div>
        </a>
        <div className="collapse navbar-collapse d-flex justify-content-around ">
          <div className="navbar-nav gap-5">
            <a
              className="nav-item nav-link active"
              href="/"
              style={{ color: "#18474D" }}
            >
              YOUR CHALLENGES
            </a>
            <a
              className="nav-item nav-link"
              href="/"
              style={{ color: "#18474D" }}
            >
              WHAT WE DO
            </a>
            <a
              className="nav-item nav-link"
              href="/"
              style={{ color: "#18474D" }}
            >
              OUR APPROACH
            </a>
          </div>

          <div className="ml-auto d-flex gap-2 flex-column align-items-end justify-content-end">
            <a
              href="/"
              className="m-0 p-0 text-end text-decoration-none "
              style={{ color: "#18474D" }}
            >
              English
            </a>
            <button
              className="btn rounded-0"
              style={{ ...styleButton, minWidth: "200px" }}
            >
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
