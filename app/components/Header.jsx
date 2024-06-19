import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div
      className="container-fluid py-5 d-flex align-items-center"
      style={{
        minHeight: "55vh",
        backgroundColor: "#effdfe",
        color: "#103d66",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 mb-3">
            <h1
              className=" text-start mb-3 fw-bold"
              style={{ color: "#103d66" }}
            >
              Empowering Communities Through Financial Excellence
            </h1>
            <p className="lead text-start text-muted">
              Empowering communities through financial excellence and trust. We
              strive to provide our members with the best financial services and
              support, ensuring a brighter future for everyone.
            </p>
            <button
              className="btn rounded-0"
              style={{ backgroundColor: "#103d66", color: "#fff" }}
            >
              Contact Us
            </button>
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <Image
              src="/house.jpg"
              alt="Tech Africa SACCO"
              width={500}
              height={500}
              priority
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
