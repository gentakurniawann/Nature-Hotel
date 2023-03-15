import React from "react";
import Media from "../media/media";
import { Link } from "react-router-dom";
import "./styles.css";
export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="d-flex" style={{ gap: "58px", flexWrap: "wrap" }}>
            <div>
              <Media value image="logo-naturehotel.svg"></Media>
              <p style={{ width: "233px" }}>
                The best hotel with natural nuances in Indonesia
              </p>
            </div>
            <div className="link-group">
              <div
                className="d-flex"
                style={{ gap: "120px", marginBottom: "80px", flexWrap: "wrap" }}
              >
                <div tyle={{ width: "170px" }}>
                  <h2>For Beginners</h2>
                  <div className="footer-link">
                    <Link to="/login">New Account</Link>
                  </div>
                  <div className="footer-link">
                    <Link to="/room">Start Booking a room</Link>
                  </div>
                  <div className="footer-link">
                    <Link to="">Use Payment</Link>
                  </div>
                </div>
                <div style={{ width: "154px" }}>
                  <h2>Explore Us</h2>
                  <div className="footer-link">
                    <Link to="">Our Careers</Link>
                  </div>
                  <div className="footer-link">
                    <Link to="">Privacy</Link>
                  </div>
                  <div className="footer-link">
                    <Link to="">Terms & Conditions</Link>
                  </div>
                </div>
                <div tyle={{ width: "248px" }}>
                  <h2>Connect Us</h2>
                  <div className="footer-link">
                    <Link to="">support@naturehotel.id</Link>
                  </div>
                  <div className="footer-link">
                    <Link to="">021 - 4532 - 1234</Link>
                  </div>
                  <div className="footer-link">
                    <Link to="">Nature Hotel, Ciwidey, Bandung</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text-center">
            <p>Copyright 2023 • All rights reserved • Nature Hotel</p>
          </div>
        </div>
      </section>
    );
  }
}
