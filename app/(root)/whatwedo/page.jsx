import Image from "next/image";
import styles from "./style.css";

const styleFirstSection = {
    backgroundColor: "#18474D",
    heigth: "200px",
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
    color: "#012634",
    // marginBottom: "55px",
    minWidth: "200px",
    //marginRight: "200px",
  
    marginTop: "50px",
  };

  const styleH4 = {
    fontSize: "19px",
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
          <h4 style={styleH4}>EMPOWERING COMMUNITIES THROUGH DIGITAL INNOVATION</h4>
          <h1 className= "fw-bold">What we do at Knit Software</h1>
          <h5 className= "fw-bold">We are all about making an Impact</h5>
          <p>
            At Knit Software, we&apos;re more than just a technology company; we&apos;re a catalyst for 
            positive change. Our dedication to integrating digital solutions into the fabric of 
            communities drives us forward. Here&apos;s a glimpse into our core:
          </p>
          <h6 className= "fw-bold">OUR VALUES</h6>
          <p>
            <strong>Integrity</strong>
            <br></br>
            We believe in the power of honesty, building trust with every click.
          </p>
          <p>
            <strong>Community</strong>
            <br></br>
            Our heart lies in creating strong bonds, knitting together diverse groups for a 
            unified purpose.
          </p>
          <p>
            <strong>Scrappiness</strong>
            <br></br>
            Innovation through agility; we&apos;re not agraid to tread new paths to find solutions.
          </p>
          <p>
            <strong>Ease</strong>
            <br></br>
            Making technology accessible and manageable, we simplify the complex,
            ensuring a seamless experience for all.
            </p> 
            </div>
            </div>
            </div>
             

  );
}
