import React from "react";
import Feature from "./Feature";

function Features() {

    const features = [

        {
            id:1,
            label:"Predictions",
            title:"AI maintenance alerts",
            desc:"Catch problems before they become expensive repairs.",
            image:"/public/florida-solar-fix-XZP59dwklV4-unsplash.jpg"
        },

        {
            id:2,
            label:"Analytics",
            title:"Energy analytics",
            desc:"Understand your consumption patterns and optimize usage.",
            image:"/public/linkedin-sales-solutions-UK1N66KUkMk-unsplash.jpg"
        },

        {
            id:3,
            label:"Reports",
            title:"Smart reports",
            desc:"Get clear insights and shareable reports in one click.",
            image:"/public/annie-spratt-QckxruozjRg-unsplash.jpg"
        }

    ];

    return(

        <section className="features">

            <div className="container">

                <div className="section-header">

                    <span className="section-label">
                        Features
                    </span>

                    <h2 className="section-title">
                        What we offer
                    </h2>

                    <p className="section-subtitle">
                        Track your solar production instantly with live data.
                    </p>

                </div>

                <div className="features-grid">

                    {features.map((feature)=>(
                        <Feature
                            key={feature.id}
                            feature={feature}
                        />
                    ))}

                </div>

            </div>

        </section>

    );

}

export default Features;