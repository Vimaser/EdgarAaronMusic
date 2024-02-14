import React from "react";
import "./css/Home.css";
import img from "../img/edgar.png";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-background-image">
      <div className="container mt-5">
        {/* Image Section */}
        <section className="image-section">
          <img src={img} alt="Edgar Aaron" />
        </section>

        {/* Upcoming Events Section */}
{/*         <section>
          <div class="box">
            <Events />
          </div> 
        </section>*/}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
