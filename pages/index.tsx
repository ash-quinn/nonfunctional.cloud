import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <h1 className="subheading">nonfunctional.cloud</h1>
          <div className="links">
            <a href="#">what we do</a>
            <a href="#">about us</a>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <h1 className="heading">
              Welcome to{" "}
              <span className="heading accent">nonfunctional.cloud!</span>
            </h1>
            <h1 className="heading">Our uptime is 99% most of the time</h1>
          </div>
          <div className="hero-right">
            <img src="me.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
