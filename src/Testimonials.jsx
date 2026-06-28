import React from "react";
import Testimonial from "./Testimonial";

function Testimonials() {

  const testimonials = [
    {
      id: 1,
      text: '"Our electricity bill dropped by 40% after using SolarVision."',
      name: "Sarah Johnson",
      job: "Homeowner",
      image: "/public/Screenshot 2026-06-28 224057.png",
    },
    {
      id: 2,
      text: '"The AI maintenance alerts helped us avoid expensive repairs."',
      name: "David Wilson",
      job: "Solar Technician",
      image: "/public/diego-hernandez-MSepzbKFz10-unsplash.jpg",
    },
    {
      id: 3,
      text: '"The dashboard is beautiful and very easy to use."',
      name: "Emma Brown",
      job: "Business Owner",
      image: "/public/Screenshot 2026-06-28 224431.png",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">

      <div className="container">

        <div className="section-header">
          <h2 className="section-title">
            Real results
          </h2>

          <p className="section-subtitle">
            Hear from those who switched to SolarVision.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              job={testimonial.job}
              image={testimonial.image}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;