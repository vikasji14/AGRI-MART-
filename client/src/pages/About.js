import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h3> WE ARE GREENMART</h3>
          <p className="text-justify mt-2">

          GreenMart is an innovative initiative spearheaded by a group of visionary fourth-year engineering students, aimed at revolutionizing the agricultural sector through the integration of advanced technology. With a deep commitment to bridging the gap between farmers and consumers, GreenMart aspires to be more than just a marketplace—it's a dynamic platform designed to transform the entire agricultural ecosystem. The website serves both consumers and farmers by offering the latest news and articles on farming, a comprehensive marketplace for purchasing farm equipment and fertilizers, and a unique feature that empowers farmers to set their own prices for the products they sell. Through these efforts, GreenMart is fostering a more connected, efficient, and sustainable future for agriculture.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
