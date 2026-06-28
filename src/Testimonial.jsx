import React from "react";

function Testimonial({ text, name, job, image }) {
  return (
    <div className="testimonial-card">

      <div className="stars">
        ★★★★★
      </div>

      <p className="testimonial-text">
        {text}
      </p>

   <div className="testimonial-author">

    <div className="author-avatar">
        <img src={image} alt={name}/>
    </div>

    <div className="author-info">
        <h4 className="author-name">{name}</h4>
        <span className="author-job">{job}</span>
    </div>

</div>

    </div>
  );
}

export default Testimonial;