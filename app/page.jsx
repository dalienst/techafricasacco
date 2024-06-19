import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Loans from "./components/Loans";
import Why from "./components/Why";
import Portal from "./components/Portal";

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      <Header />
      <About />
      <Loans />
      <Why />
      <Portal />
    </>
  );
}

export default Landing;
