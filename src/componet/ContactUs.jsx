import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className="heading-3">1% OF THE INDUSTRY</h2>
        <h2 className="heading-4">Welcome to your new digital reality. Now.</h2>
        <form>
          <input type="email" placeholder="Enter your Email" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
          <li>
            <span>
              <FaCheckCircle />
            </span>
            <p>Instant results</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactUs;
