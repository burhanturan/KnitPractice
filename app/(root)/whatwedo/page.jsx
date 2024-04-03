import Image from "next/image"
import styles from "./style.css"
import Link from "next/link"

const styleFirstSection = {
  backgroundColor: "#012634",
  heigth: "200px",
}

const styleSecondSection = {
  color: "#D8F0F4",
  fontFamily: "Arial",
  display: "inline-flex",
  height: "100px",
  width: "600px",
  justifyContent: "center",
  marginTop: "-100px",
  fontSize: "20px",
  marginLeft: "330px",
}

const styleButton = {
  backgroundColor: "#D8F0F4",
  color: "#012634",
  // marginBottom: "55px",
  minWidth: "200px",
  //marginRight: "200px",

  marginTop: "50px",
}

const styleH4 = {
  fontSize: "19px",
}

const style2 = {
  fontSize: "60px",
}

export default function WhatWeDoPage() {
  return (
    <div
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#EEE8E8",
      }}
    >
      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#102634" }}
      >
        <div style={{ maxWidth: "630px" }}>
          <h4 style={styleH4}>
            EMPOWERING COMMUNITIES THROUGH DIGITAL INNOVATION
          </h4>
          <h1 className="fw-bold">What we do at Knit Software</h1>
          <h5 className="fw-bold">We are all about making an Impact</h5>
          <p>
            At Knit Software, we&apos;re more than just a technology company;
            we&apos;re a catalyst for positive change. Our dedication to
            integrating digital solutions into the fabric of communities drives
            us forward. Here&apos;s a glimpse into our core:
          </p>
          <h6 className="fw-bold">OUR VALUES</h6>
          <p>
            <strong>Integrity</strong>
            <br></br>
            We believe in the power of honesty, building trust with every click.
          </p>
          <p>
            <strong>Community</strong>
            <br></br>
            Our heart lies in creating strong bonds, knitting together diverse
            groups for a unified purpose.
          </p>
          <p>
            <strong>Scrappiness</strong>
            <br></br>
            Innovation through agility; we&apos;re not agraid to tread new paths
            to find solutions.
          </p>
          <p>
            <strong>Ease</strong>
            <br></br>
            Making technology accessible and manageable, we simplify the
            complex, ensuring a seamless experience for all.
          </p>
        </div>

        <div
          className="picture"
          style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
        >
          <Image
            width={610}
            height={550}
            src="/whatwedoImg.png"
            alt=""
            style={{
              display: "inline-block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
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
                className="mb-3 text-center align-items-center justify-content-center"
                style={{ ...styleSecondSection }}
              >
                Empowerment Through Innovation: Discover Our Approach
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
                See how we make it happen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#18474D" }}
      >
        <div className="picture" style={{ maxWidth: "600px" }}>
          <Image
            className="picture"
            width={610}
            height={550}
            src="/whatwedoSecondImg.png"
            alt=""
          />
        </div>

        <div style={{ maxWidth: "630px" }}>
          <h1 style={style2}>Our Mission</h1>
          <h4 className="fw-bold" style={{ fontSize: "20px" }}>
            "To weave a digital future where every connection counts"
          </h4>
          <p style={{ fontSize: "18px" }}>
            In a world brimming with potential, our mission is to empower every
            individual and business with cutting-edge web solutions. From
            fostering collaboration to driving discovery, we're here to help
            communities innovate and thrive.
          </p>
          <h1 style={{ ...style2, marginTop: "45px" }}>Our Products</h1>
          <p style={{ fontSize: "18px" }}>
            Our suite of products embodies our ethos of agility and user-centric
            design. From sleek, intuitive web applications to comprehensive
            digital solutions for small businesses, we tailor technology to fit
            your needs. Our goal? To transform your digital landscape, making
            technology work for you.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <Link
          href="/yourchallenges"
          className="btn rounded-0"
          style={{
            backgroundColor: "#012634",
            color: "#DDE9D3",
            minWidth: "200px",
            margin: "0 auto",
          }}
        >
          WHAT WE SOLVE
        </Link>
      </div>
    </div>
  )
}
