import React from "react";
import { useState } from "react";

function Contact(){
 return (
    <section className="contact" id="contact">

      <h2>Ready to Start Saving Energy?</h2>

      <p>
        Join thousands of customers using SolarVision to optimize
        their solar systems.
      </p>

      <form>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;