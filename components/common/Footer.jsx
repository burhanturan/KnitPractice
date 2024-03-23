import Link from "next/link";

const styleFooter = {
  backgroundColor: "#0c2543",
  color: "#ffffff",
  fontSize: "20px",
  fontFamily: "Fredoka One",
  minHeight: "300px",
};

export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className=" w-100" style={{ ...styleFooter }}>
        <Link
          href="/"
          className=" text-decoration-none text-white align-start ms-5  start-50"
        >
          KNIT SOFTWARE
        </Link>
        <div className="align-start ms-5  start-50 col">
          <Link
            className="text-decoration-none ms-5 text-white"
            href="/"
            title="Go To What we do"
          >
            About us
          </Link>
        </div>
        <ul className="align-start ms-5  start-50 text-white decoration-none">
          <li>          <Link
            className="text-decoration-none ms-5 text-white"
            href="/"
            title="Go To What we do"
          >
            About us
          </Link></li>
          <li>          <Link
            className="text-decoration-none ms-5 text-white"
            href="/"
            title="Go To What we do"
          >
            About us
          </Link></li>
          <li>          <Link
            className="text-decoration-none ms-5 text-white"
            href="/"
            title="Go To What we do"
          >
            About us
          </Link></li>
          <li>          <Link
            className="text-decoration-none ms-5 text-white"
            href="/"
            title="Go To What we do"
          >
            About us
          </Link></li>
          <li>          <Link
            className="text-decoration-none ms-5 text-white"
            href="/"
            title="Go To What we do"
          >
            About us
          </Link></li>
        </ul>

        <p className="align-start " style={{marginBottom: "20"}}>
          KnitSoftware.com © 2022 All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
