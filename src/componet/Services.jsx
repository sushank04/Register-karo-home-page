import React from "react";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "../assets/assests";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  const servicesCardContent = [
    {
      cardTitle: "Company Formation",
      cardDescription:
        "Build web-based solutions that enhance customer experience.",
      cardIcon: service1,
    },
    {
      cardTitle: " Company Secretarial Services",
      cardDescription:
        "Make data-driven decisions and utilize technology to reach business goals.",
      cardIcon: service2,
    },
    {
      cardTitle: "Virtual Office Address",
      cardDescription:
        "Foster customer relationships by effectively serving your market.",
      cardIcon: service3,
    },
    {
      cardTitle: "Annual Compliance Services",
      cardDescription:
        "Turn your ideas into modern products with our design experts.",
      cardIcon: service4,
    },
    {
      cardTitle: "Payroll Services",
      cardDescription:
        "Expand your business across the globe with minimal effort.",
      cardIcon: service5,
    },

    {
      cardTitle: "Bookkeeping Services",
      cardDescription:
        "Steering user behaviours with creative design, data insights & technology.",
      cardIcon: service6,
    },
  ];

  return (
    <>
      <div className="Main-services-container">
        <div className="service-container">
          <h2 className="heading">WELCOME TO REGISTERKARO.IN</h2>
          <h2 className="heading1">Explore Our Services</h2>

          <div className="service-card-container">
            {servicesCardContent.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.cardIcon} alt={service.cardTitle} />

                <h3 className="service-title">{service.cardTitle}</h3>
                <p className="servics-desc">{service.cardDescription}</p>

                <div className="card-button">
                  <button className="service-button">
                    Learn more
                    <FaRegArrowAltCircleRight className="service-logo" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="see-all-servise-button">
            <button>See All Services</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
