import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Loans from "./components/Loans";
import Why from "./components/Why";
import Portal from "./components/Portal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Loans />
      <Why />
      <Portal />
      <Footer />
    </>
  );
}

export default Landing;
