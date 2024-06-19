import Image from "next/image";
import React from "react";
import { company, legals, loans, quickLinks } from "../data/footer";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div
        className="container-fluid py-5 text-white"
        style={{ backgroundColor: "#103d66" }}
      >
        <div className="text-center">
          <Image
            src="/logo.svg"
            alt="Tech Africa SACCO"
            width={70}
            height={70}
          />
          <h1 className="mt-3">Tech Africa SACCO</h1>
          <p>Empowering communities through financial excellence and trust</p>
        </div>
        <section className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 mb-3">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                {quickLinks.map((link) => (
                  <li key={link.id} className="mb-2">
                    <Link href="#" className="text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 col-sm-12 mb-3">
              <h6>Products</h6>
              <ul className="list-unstyled">
                {loans.map((link) => (
                  <li key={link.id} className="mb-2">
                    <Link href="#" className="text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 col-sm-12 mb-3">
              <h6>Company</h6>
              <ul className="list-unstyled">
                {company.map((link) => (
                  <li key={link.id} className="mb-2">
                    <Link href="#" className="text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 col-sm-12 mb-3">
              <h6>Legal</h6>
              <ul className="list-unstyled">
                {legals.map((link) => (
                  <li key={link.id} className="mb-2">
                    <Link href="#" className="text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid bg-white text center py-2">
        <p>Copyright &copy; Tech Africa {new Date().getFullYear()}</p>
      </div>
    </>
  );
}

export default Footer;
