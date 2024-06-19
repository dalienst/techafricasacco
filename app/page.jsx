import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Loans from "./components/Loans";

function Landing() {
  return (
    <>
      {/* <Hero /> */}
      <Header />
      <About />
      <Loans />
    </>
  );
}

export default Landing;
