import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div
      className="container-fluid bg-light py-5 d-flex align-items-center"
      style={{ minHeight: "55vh", backgroundColor: "#f2ecf6" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 mb-3">
            <h1 className="display-4 text-start text-dark mb-3">
              Empowering Communities
            </h1>
            <h3 className="fw-bold text-start text-secondary mb-4">
              Through Financial Excellence
            </h3>
            <p className="lead text-start text-muted">
              Empowering communities through financial excellence and trust. We
              strive to provide our members with the best financial services and
              support, ensuring a brighter future for everyone.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <Image
              src="/house.jpg"
              alt="Tech Africa SACCO"
              width={400}
              height={400}
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
