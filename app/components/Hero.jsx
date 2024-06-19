import React from "react";

function Hero() {
  return (
    <div className="container-fluid hero d-flex align-items-end">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6 col-sm-12">
            <h1 className="hero-heading text-white">Empowering Communities.</h1>
            <h3 className="text-white">Through Financial Excellence.</h3>
            <p className="text-white">Empowering communities through financial excellence and trust</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card rounded-3">
              <div className="card-body">
                <h3 className="card-title">Contact us today</h3>
                <p className="card-text fw-semibold">
                  Enter your email address
                </p>
                <form>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address"
                  />
                  <button className="btn btn-outline-dark rounded-pill mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
