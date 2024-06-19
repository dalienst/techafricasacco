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
                      View accounts, apply for loans, and access policy
                      information with our self-service tools
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
                      Apply for loans with our online loan application form and follow through the onboarding process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
