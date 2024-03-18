import Image from "next/image";
import Link from "next/link";

import styleDiv from "./SecondPage.scss";
import { Button } from "react-bootstrap";

const styleFirstSection = {
  backgroundColor: "#18474D",
  height: "200px",
};

const styleSecondSection = {
  color: "#DDE9D3",
  fontFamily: "Arial",
  display: "inline-flex",
  height: "100px",
  width: "600px",
  justifyContent: "center",
  marginTop: "-100px",
  fontSize: "20px",
  marginLeft: "330px",
};

const styleButton = {
  backgroundColor: "#dde9d3",
  color: "#18474D",
  // marginBottom: "55px",
  minWidth: "200px",
  //marginRight: "200px",

  marginTop: "50px",
};

export default function Home() {
  return (
    <main
      className="justify-content-center align-items-center flex h-100 w-100"
      style={{
        fontFamily: "Arial",
        backgroundColor: "#D8F0F4",
      }}
    >
      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#18474D" }}
      >
        <div style={{ maxWidth: "630px" }}>
          <h4>CONNECTING COMMUNITIES, BUILDING DREAMS</h4>
          <h1>Let's Knit the Future!</h1>
          <h5>Join Us in Weaving a Future Where Technology Unites Us All</h5>
          <p>
            At Knit Software, we're more than just a tech company; we're a
            community builder. With every line of code, we stitch together
            stronger connections, fostering an environment where businesses and
            communities thrive hand-in-hand.
          </p>
          <p>
            Our mission is to empower underrepresented groups in the tech space,
            bring innovative solutions to the forefront, and help your business
            tap into the heart of diverse communities. From creating dynamic web
            applications to transforming ideas into digital fantasies, we're
            dedicated to making technology accessible and impactful for all.
          </p>
          <p>
            Let's knit the future together, creating spaces where every voice is
            heard, and every dream can take shape. Get in touch with us today,
            and let's start crafting a world of endless possibilities, one
            digital thread at a time.
          </p>

          <Link
            href="/"
            className="btn rounded-0"
            style={{
              backgroundColor: "#18474D",
              color: "#DDE9D3",
              minWidth: "200px",
              marginTop: "60px",
            }}
          >
            GET IN TOUCH
          </Link>
        </div>
        <div className="shadow" style={{ maxWidth: "600px" }}>
          <Image width={610} height={550} src="/homepageImg.png" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div
            className="col text-center mt-5 d-flex justify-content-center align-items-center"
            style={{ ...styleFirstSection }}
          >
            <div>
              <span
                className="mb-5 text-center align-items-center justify-content-center"
                style={{ ...styleSecondSection }}
              >
                Software means investing smartly in technology that drives real,
                impactful changes.
              </span>
            </div>

            <div
              className=" col d-flex"
              style={{ marginTop: "50px", marginLeft: "-420px" }}
            >
              <button
                className="btn rounded-0 align-items-center justify-content-center"
                style={{ ...styleButton }}
              >
                Learn more about what we do
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
