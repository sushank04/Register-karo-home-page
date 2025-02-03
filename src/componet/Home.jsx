import React from "react";
import { handshake, logo, people } from "../assets/assests";
import { GoStarFill } from "react-icons/go";
import StarRating from "./StarRating";
import { IoStarSharp } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";

const Home = () => {
  const RatingClientFinancialSection = [
    {
      id: 1,
      label: "Customer  Rating",
      ratingIcon: <CiGrid41 className="rating-icon" />,
      ratingNumber: "4.5+",
    },
    {
      id: 2,
      label: "Clients",
      ratingImg: people,
      ratingNumber: "20,000+",
    },
    {
      id: 3,
      label: "Financial Stability",
      ratingImg: handshake,
      ratingNumber: "99.8%",
    },
  ];
  return (
    <>
      <div className="container-home">
        <div className="baground-1">
          <div className="home-side-content">
            <ul>
              <li>
                <p>Annual Compliance</p>
              </li>
              <li>
                <p>Payroll Services</p>
              </li>
              <li>
                <p>Company Formation</p>
              </li>
              <li>
                <p>Annual Compliance</p>
              </li>
            </ul>
          </div>
          <div className="baground-2">
            <div className="baground-3"></div>
          </div>
          <div className="content">
            <h3 className="google-rating">
              <span className="star-1">
                <IoStarSharp />
              </span>
              Google rating
              <StarRating rating={5} />
            </h3>
            <h1 className="heading-1">
              Your trusted partner for compliance business needs
            </h1>
            <div className="line"></div>
            <span className="line"></span>
            <p className="description">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,
              <span> registrations, tax filings,</span> and other
              <span> legal matters.</span>
            </p>

            <div className="rating-clients-financial">
              {RatingClientFinancialSection.map((data) => (
                <div key={data.id} className="customer-rating">
                  {data.ratingImg ? (
                    <img
                      src={data.ratingImg}
                      alt={data.label}
                      className="rating-icon"
                    />
                  ) : (
                    data.ratingIcon
                  )}

                  <div className="rating-text">
                    <span className="rating-number">{data.ratingNumber}</span>
                    <p className="rating-label">{data.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-container">
              <button className="btn"> Talk An Expert</button>
              <button className="btn1">
                <img src={logo} alt="" /> See how it works
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
