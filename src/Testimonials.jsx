import React from "react";


function Testimonials(){
    return (
    <section className="testimonials" id="testimonials">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <p>
            "Our electricity bill dropped by 40% after using SolarVision."
          </p>

          <h4>Sarah Johnson</h4>

          <span>Homeowner</span>
        </div>

        <div className="testimonial-card">
          <p>
            "The AI maintenance alerts helped us avoid expensive repairs."
          </p>

          <h4>David Wilson</h4>

          <span>Solar Technician</span>
        </div>

        <div className="testimonial-card">
          <p>
            "The dashboard is beautiful and very easy to use."
          </p>

          <h4>Emma Brown</h4>

          <span>Business Owner</span>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;