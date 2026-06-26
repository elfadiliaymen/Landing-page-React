import React from "react";
import './index.css';
import './App.css';
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import'./App.css';

function App() {
  return (
    <>
      <div className="body"> 
        <Header className="header"></Header>
        <hr />
        <Hero className="hero"></Hero>
        <hr />
        <Features className="features"></Features>
         <hr />
        <About className="about"></About>
          <hr />
        <Testimonials className="testimonials"></Testimonials>
        <hr />
        <Contact className="contact"></Contact>
      <hr />
        <Footer className="footer"></Footer>
      </div>
    </>
  )
}

export default App;
