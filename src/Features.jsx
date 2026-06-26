import React from "react";
import Feature from "./Feature";

function Features(){

    const featuresList = [
  {
    id: 1,
    title: "Real-Time Monitoring",
    description: "Track your solar production instantly with live data.."
  },
  {
    id: 2,
    title: "AI Predictions",
    description: " Receive maintenance alerts before problems occur."
  },
  {
    id: 3,
    title: "Energy Analytics",
    description: "Props allow components to receive data."
  },
  {
    id: 4,
    title: "Mobile Dashboard",
    description: " Manage your solar system from anywhere."
  } ,
   {
    id: 5,
    title: "Battery Management",
    description: "  Monitor battery performance and energy storage."
  } ,
    {
    id: 5,
    title: "Eco Impact",
    description: "Measure your CO₂ savings and environmental impact.."
  }
];

    return (
    <section className="features" id="features">

      <div className="features-grid">
        {featuresList.map((feature) => (
          <Feature
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>


    </section>
  );
}

export default Features;