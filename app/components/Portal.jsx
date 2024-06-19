import Image from "next/image";
import React from "react";

function Portal() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#effdfe" }}>
      <section className="container py-5 px-4 mt-3">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 mb-3 text-end">
            <Image
              src="/app.jpg"
              alt="Tech Africa SACCO"
              width={450}
              height={450}
              priority
              className="img-fluid rounded-3"
            />
          </div>

          <div className="col-sm-12 col-md-6 mb-3 ">
            <h3 className="text-start title mb-3">
              Stay connected with the TA Portal Web Application
            </h3>

            <p className="text-start">
              View accounts, and access policy information with our self-service
              tools
            </p>

            <div className="text-start">
              <button
                className="btn rounded-0 btn-sm"
                style={{ backgroundColor: "#103d66", color: "#fff" }}
              >
                Visit Portal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portal;
