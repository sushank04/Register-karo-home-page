import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const HeaderNavbar = () => {
  return (
    <>
      <nav>
        <div className="HomeNavebar-container">
          <img
            src="https://www.figma.com/file/BWtutOCqSUinQiqoSCDQ0c/image/090e8f06b11c8b29b04753e8d75af08ed5a8fb5b"
            alt=""
          />
        </div>

        <ul>
          <li>
            <a href="#">
              <span className="selector">Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="selector">
                Our Services
                <span className="arrow-logo">
                  <FaAngleDown />
                </span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="selector">Blog</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="selector">Contact Us</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="selector">About us</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="search-logo">
                <CiSearch />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="button">Talk An Expert</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavbar;
