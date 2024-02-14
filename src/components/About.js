import React from "react";
import Footer from "./Footer";
import img2 from "../img/zedgar.gif";
import "./css/About.css";

function About() {
  return (
    <>
      <div className="about-container mt-5">
        <h1>EDGAR AARON: SOFTHEART SOLID SPINE</h1>
        <section className="image-section">
          <img src={img2} alt="Dan Broe" />
        </section>
        <p>
          Edgar Aaron, a distinguished alumnus of Southeastern Louisiana
          University, earned his Bachelor of Arts degree from the Department of
          Social Work, reflecting his deep-rooted commitment to community and
          societal betterment. Hailing from Hammond, Louisiana, Edgar's journey
          has been one marked by a dedication to both personal growth and social
          welfare.
        </p>
        <p>
          Born on December 23, 1975, Edgar's personality intriguingly blends
          warmth and resilience. In his own words, "I am Edgar, I'm an odd
          combination of really sweet and don't mess with me." This unique mix
          of kindness and strength characterizes not only his personal
          interactions but also his professional ethos. His academic background
          in social work underpins a career devoted to advocacy and empowerment,
          where he channels his empathetic nature into actionable, positive
          change.
        </p>
        <p>
          Edgar's roots in Hammond have shaped his worldview, intertwining local
          values with a broader, inclusive perspective. His journey from a
          student to a beacon in his community exemplifies a commitment to
          lifelong learning and service, embodying the spirit of both his
          hometown and alma mater.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
