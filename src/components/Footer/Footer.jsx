import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Paymemt from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nam porro expedita. Impedit natus, velit fuga ad corrupti atque
            consectetur eius a reiciendis, quisquam eum autem, d
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow/>
            <div className="text">
                B-34 Begumpur, Opp. ROhini sec. 22, New Delhi - 110086
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt/>
            <div className="text">
                Phone No. : +91 9873454930
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope/>
            <div className="text">
                Email : trydan.in@gmail.com
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms and Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">

            </div>
            <img src={Paymemt} alt=" Payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
