import Image from "next/image";
import React from "react";

function Why() {
  return (
    <div className="container-fluid py-5 mb-3 bg-white">
      <div
        className="container py-5 shadow bg-light"
        // style={{ backgroundColor: "#effdfe" }}
      >
        <div className="text-center mb-5">
          <h2 className="text-center title fw-bold">
            Quick access to all things TechAfricaLife
          </h2>

          <hr
            className="w-25 mx-auto"
            style={{ backgroundColor: "#103d66", height: "5px" }}
          />
          <p className="lead">
            Easy to view accounts, apply for loans, access policy information
            with our self-service tools
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-3">
              <div className="card rounded-5">
                <div className="card-body d-flex align-items-center justify-content-between gap-3">
                  <div className="rounded-3 p-3 border  border-secondary-subtle">
                    <i className="bi bi-person-badge-fill"></i>
                  </div>
                  <div className="text-start">
                    <h6 className="card-title">Accounts</h6>
                    <p className="card-text">
                      View accounts, and access policy information with our
                      self-service tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 mb-3">
              <div className="card rounded-5">
                <div className="card-body d-flex align-items-center justify-content-between gap-3">
                  <div className="rounded-3 p-3 border  border-secondary-subtle">
                    <i className="bi bi-cash-coin"></i>
                  </div>
                  <div className="text-start">
                    <h6 className="card-title">Apply for loans</h6>
                    <p className="card-text">
                      Apply for loans with our online loan application form
                      through the onboarding process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-5 px-4 mt-3">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6 mb-3">
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
                  View accounts, and access policy information with our
                  self-service tools
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
      </div>
    </div>
  );
}

export default Why;
