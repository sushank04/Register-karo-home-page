import { IoIosArrowRoundForward } from "react-icons/io";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  form,
  payment,
  exicutive,
  mail,
} from "./assets/assests.js";
import { SiGoogleforms } from "react-icons/si";

const HappyClients = () => {
  const clientsLogo = [
    {
      logo: client1,
      name: "Client 1",
    },
    {
      logo: client2,
      name: "Client 1",
    },
    {
      logo: client3,
      name: "Client 1",
    },
    {
      logo: client4,
      name: "Client 1",
    },
    {
      logo: client5,
      name: "Client 1",
    },
    {
      logo: client6,
      name: "Client 1",
    },
    {
      logo: client7,
      name: "Client 1",
    },
    {
      logo: client8,
      name: "Client 1",
    },
    {
      logo: client9,
      name: "Client 1",
    },
    {
      logo: client10,
      name: "Client 1",
    },
    {
      logo: client11,
      name: "Client 1",
    },
    {
      logo: client12,
      name: "Client 1",
    },
    {
      logo: client13,
      name: "Client 1",
    },
    {
      logo: client14,
      name: "Client 1",
    },
    {
      logo: client15,
      name: "Client 1",
    },
    {
      logo: client16,
      name: "Client 1",
    },
    {
      logo: client17,
      name: "Client 1",
    },
    {
      logo: client18,
      name: "Client 1",
    },
    {
      logo: client19,
      name: "Client 1",
    },
    {
      logo: client20,
      name: "Client 1",
    },
    {
      logo: client21,
      name: "Client 1",
    },
    {
      logo: client22,
      name: "Client 1",
    },
    {
      logo: client23,
      name: "Client 1",
    },
  ];
  return (
    <>
      <div className="happy-client-container">
        <div className="happy-client-content">
          <h2>Our Happy Clients</h2>
          <p>
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>

        <div className="happy-client-logo-container">
          {clientsLogo.map((client, index) => (
            <div key={index} className={`happy-client-logo logo-${index + 1}`}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
        <div className="show-more-btn-container">
          <button className="show-more-btn">
            Show more{" "}
            <span>
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
      </div>
      {/* Fillup-Application-Form */}
      <div className="application-form-container">
        <ul className="form-container">
          <li>
            <a href="#">
              <div className="img-container">
                <div className="img">
                  <img src={form} alt="form" />
                </div>
              </div>
              <span className="fill-up">Fill up Application Form</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="img-container">
                <div className="img img1">
                  <img src={payment} alt="form" />
                </div>
              </div>
              <span className="fill-up">Make Online Payment</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="img-container">
                <div className="img img2">
                  <img src={exicutive} alt="form" />
                </div>
              </div>

              <span className="fill-up">
                Executive will Process Application
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="img-container">
                <div className="img img3">
                  <img src={mail} alt="form" />
                </div>
              </div>
              <span className="fill-up">Get Confirm Mail</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HappyClients;
