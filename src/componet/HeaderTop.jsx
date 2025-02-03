import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top-container">
        <ul>
          <li>
            <a href="#">
              <span className="mail">
                <span>
                  <IoIosMail />
                </span>
                www.registerkaro.in
              </span>
            </a>
          </li>
          <div className="headertop-line"> </div>

          <li>
            <a href="#">
              <span className="phone">
                <span>
                  <IoMdCall />
                </span>
                +918447746183
              </span>
            </a>
          </li>
          <div className="headertop-line"> </div>
          <div className="headertop-logos">
            <li>
              <a href="#">
                <span className="Instagram">
                  <FaInstagram />
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="Facebook">
                  <FaFacebook />
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="Twitter">
                  <FaTwitter />
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="Pinterest">
                  <FaPinterest />
                </span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default HeaderTop;
