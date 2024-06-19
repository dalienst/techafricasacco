/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { aboutSummary, achievement } from "../data/about";

function About() {
  return (
    <>
      <div className="container py-5">
        <div className="row py-3">
          <div className="col-md-6 col-sm-12 mb-3">
            <p className="text-uppercase fw-bold text-secondary mb-0">About</p>
            <h2 className="about-heading">
              Keeping Savings and Investing Simple and Efficient
            </h2>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <p className="about-text">
              At Tech Africa SACCO, we believe in making financial services
              accessible and straightforward for our members. With a commitment
              to transparency and innovation, we empower communities to save
              effectively and invest wisely. Whether you're saving for the
              future or planning for a major purchase, our SACCO is here to
              support your financial journey with personalized solutions and
              trusted guidance.
            </p>

            <div className="row">
              {aboutSummary?.map((item) => (
                <div className="col-md-4 col-sm-12 mb-3" key={item.id}>
                  <div
                    className="card h-100 rounded-5 bg-light"
                    // style={{ backgroundColor: "#effdfe" }}
                  >
                    <div className="card-body ">
                      <i className={item.icon} style={{ color: "#103d66" }}></i>
                      <p
                        className="card-text mt-3 fw-bold"
                        style={{ color: "#103d66" }}
                      >
                        <small>{item.title}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-3">
          <div className="row">
            {achievement?.map((item) => (
              <div className="col-md-3 col-sm-12 mb-3" key={item.id}>
                <div className="card h-100 d-flex align-items-center justify-content-center rounded-5">
                  <div className="card-body text-center">
                    <h3 className="card-title fw-bold">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
