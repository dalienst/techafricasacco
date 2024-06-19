/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { loans } from "../data/loans";
import Image from "next/image";

function Loans() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#e5eaee" }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-center title fw-bold">Our Loans</h2>
          <p className="lead">
            Discover a variety of loan options designed to meet your personal
            and business financial needs. At Tech Africa SACCO, we are committed
            to providing flexible and affordable loan solutions.
          </p>
        </div>

        {/* <section>
          {loans.map((loan) => (
            <div className="row  py-2 align-items-center" key={loan.id}>
              <div className="col-sm-12 col-md-6 mb-3">
                <Image
                  src="/house.jpg"
                  alt="Tech Africa SACCO"
                  width={450}
                  height={450}
                  priority
                  className="img-fluid shadow"
                />
              </div>
              <div className="col-sm-12 col-md-6 mb-3">
                <h2 className="about-heading">{loan.title}</h2>
                <p className="about-text">{loan.description}</p>
                <button
                  className="btn rounded-0"
                  style={{ backgroundColor: "#103d66", color: "#fff" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </section> */}

        <section>
          <div className="row  py-2 align-items-center">
            <div className="col-sm-12 col-md-6 mb-3">
              <h2 className="about-heading">Personal Loan</h2>
              <p className="about-text">
                Our Personal Loans provide you with the financial support you
                need to cover personal expenses, consolidate debt, or make
                significant purchases. With competitive interest rates and
                flexible repayment terms, we ensure you achieve your financial
                goals with ease.
              </p>
              <button
                className="btn rounded-0"
                style={{ backgroundColor: "#103d66", color: "#fff" }}
              >
                Get Started
              </button>
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <Image
                src="/house.jpg"
                alt="Tech Africa SACCO"
                width={450}
                height={450}
                priority
                className="img-fluid shadow"
              />
            </div>
          </div>

          <div className="row  py-2 align-items-center">
            <div className="col-sm-12 col-md-6 mb-3">
              <Image
                src="/house.jpg"
                alt="Tech Africa SACCO"
                width={450}
                height={450}
                priority
                className="img-fluid shadow"
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <h2 className="about-heading">Asset Financing</h2>
              <p className="about-text">
                With our Asset Financing options, you can acquire new assets or
                upgrade existing ones without straining your finances. We
                provide funding for vehicles, machinery, and other essential
                assets with flexible terms tailored to meet your needs.
              </p>
              <button
                className="btn rounded-0"
                style={{ backgroundColor: "#103d66", color: "#fff" }}
              >
                Valuation Schema
              </button>
            </div>
          </div>

          <div className="row  py-2 align-items-center">
            <div className="col-sm-12 col-md-6 mb-3">
              <h2 className="about-heading">Business Loan</h2>
              <p className="about-text">
                Tech Africa SACCO's Business Loans are designed to help
                entrepreneurs and business owners expand their operations,
                purchase equipment, or manage cash flow. Benefit from our
                attractive interest rates and customized repayment plans to
                drive your business growth.
              </p>
              <button
                className="btn rounded-0"
                style={{ backgroundColor: "#103d66", color: "#fff" }}
              >
                Get Started
              </button>
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <Image
                src="/house.jpg"
                alt="Tech Africa SACCO"
                width={450}
                height={450}
                priority
                className="img-fluid shadow"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Loans;
